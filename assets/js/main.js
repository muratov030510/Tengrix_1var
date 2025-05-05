document.addEventListener("DOMContentLoaded", function () {
    // Поднимаемся на уровень выше, чтобы найти "components/"
    fetch("../components/header.html")
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
            return response.text();
        })
        .then(data => document.getElementById("header").innerHTML = data)
        .catch(error => console.error("Ошибка загрузки хедера:", error));

    fetch("../components/footer.html")
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
            return response.text();
        })
        .then(data => document.getElementById("footer").innerHTML = data)
        .catch(error => console.error("Ошибка загрузки футера:", error));
});
