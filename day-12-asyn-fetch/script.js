const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const profile = document.getElementById("profile");

searchBtn.addEventListener("click", getGithubProfile);

async function getGithubProfile() {

    const username = usernameInput.value.trim();

    if (username === "") {
        message.textContent = "Please enter a GitHub username.";
        profile.innerHTML = "";
        return;
    }

    message.textContent = "Loading...";
    profile.innerHTML = "";

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
            throw new Error("GitHub user not found");
        }

        const data = await response.json();

        message.textContent = "";

        profile.innerHTML = `
            <div class="profile-card">

                <img
                    src="${data.avatar_url}"
                    alt="${data.login}"
                    class="avatar"
                >

                <h2>${data.name ?? data.login}</h2>

                <p class="username">@${data.login}</p>

                <p class="bio">
                    ${data.bio ?? "No bio available"}
                </p>

                <p class="repos">
                    Public Repositories:
                    <strong>${data.public_repos}</strong>
                </p>

            </div>
        `;

    } catch (error) {

        message.textContent = error.message;
        profile.innerHTML = "";
    }
}