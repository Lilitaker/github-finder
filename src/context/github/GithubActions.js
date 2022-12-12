const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
//const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// GET SEARCH RESULTS
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  /* The token was giving an error */
  const response = await fetch(
    `${GITHUB_URL}/search/users?${params}` /*  {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`, 
      },
    } */
  );

  const { items } = await response.json();

  return items;
};

// GET SINGLE USER
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`);

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();

    return data;
  }
};

// GET USER REPOS
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);

  const data = await response.json();

  return data;
};