import axios from "axios";

async function searchArvix(searchValue) {
  try {
    const response = await axios.get(
      `https://export.arxiv.org/api/query?search_query=all:"${searchValue}"&sortBy=lastUpdatedDate&sortOrder=descending`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}

export default searchArvix;
