import React, { useState, useEffect ,lazy, Suspense } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { openSource } from "../../Portfolio";
import Contact from "../Contact/Contact";
import Loading from "../Loading/Loading";

const renderLoader = () => <Loading />;
const GitHubProfileCard = lazy(() => import('../../components/GitHubProfileCard/GitHubProfileCard'));
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }
  function getProfileData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
      {
        user(login:"${openSource.githubUserName}") { 
          name
          bio
          isHireable
          avatarUrl
          location
        }
    }
      `,
      })
      .then((result) => {
        setProfileFunction(result.data.user);
      })
      .catch(function (error) {
          console.log(error);
          setProfileFunction("Error");
          console.log("Because of this Error Contact Section is Showed instead of Profile");
          openSource.showGitHubProfile = "false";
      });
  }
  useEffect(() => {
    if (openSource.showGitHubProfile === "true") {
      getProfileData();
    }
  }, []);
if (openSource.showGitHubProfile === "true" && !(typeof prof === 'string' || prof instanceof String)){  
    return (
      <Suspense fallback={renderLoader()}>
        <GitHubProfileCard prof={prof} key={prof.id} /> 
      </Suspense>
       );
  } else {
    return <Contact />;
  }
}