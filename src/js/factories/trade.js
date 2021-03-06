angular
  .module("bodhinomad")
  .factory("Trade", Trade);

Trade.$inject = ["$resource", "API"];
function Trade($resource, API) {
  return $resource(`${API}/trades/:id`, { id: "@id" }, {
    // 'get': { method: "GET", isArray: false },
    'update': { method: "PUT" },
    'addComment': {
      method: "PUT",
      url: `${API}/trades/:id/addcomment`,
      params: { id: "@id" }
    }
  });
}
