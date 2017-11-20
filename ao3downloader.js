

//matches parts of a page of the form <a href="/works/00000000" where the zeroes are the work number
const regexp = /<a href="\/works\/(\d+)">/g;
const username = 'resonance_and_d';
const currentPage = 1;

//gets the first page of the bookmarks
axios.get(`https://archiveofourown.org/users/${username}/bookmarks?page=${currentPage}`)
  .then(html_page => {
    console.log(html_page);
  })


