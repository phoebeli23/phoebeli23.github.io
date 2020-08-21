$.getJSON("https://api.countapi.xyz/hit/phoebeli23.github.io/visits", function(response) {
    $("#visitors").text(response.value);
});
