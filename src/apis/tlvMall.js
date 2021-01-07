export function getStores(searchTerm, page, pageSize) {
  const body = {
    searchTerm: searchTerm,
    requestPage: page,
    pageSize: pageSize,
  };

  return fetch("https://service.tlvmall.com/api/search/search", {
    method: "post",
    body: JSON.stringify(body),
  }).then(res => res.json());
}
