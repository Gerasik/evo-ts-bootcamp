import { useEffect, useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const ListItem = styled.li`
  height: 25vh;
  flex-grow: 1;
  object-fit: cover;
  padding: 2px;
  @media (max-height: 480px) {
    height: 80vh;
  }
`;

const Image = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
`;

function App() {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    async function postData(url = "") {
      const response = await fetch(url);
      return await response.json();
    }

    postData(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH}&count=30`
    ).then((array) => {
      setImagesList(array);
    });
  }, []);

  return (
    <div className="App">
      <List>
        {imagesList.map((image) => (
          <ListItem key={image.id}>
            <Image
              srcset={`${image.urls.thumb} 200w,~
              ${image.urls.small} 400w,
                ${image.urls.regular} 1080w`}
              sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
              src={image.urls.small}
              alt={image.alt_description}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
