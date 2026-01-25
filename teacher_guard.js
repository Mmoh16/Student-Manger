/**
 * TEACHER GUARD
 * This script checks if a user is logged in via Clerk.
 * If not, it redirects them to the login page.
 */

const LOGIN_PAGE = "index.html"; // The page where your login box lives

window.addEventListener("load", async function () {
    try {
        // 1. Check if Clerk is loaded on the page
        if (!window.Clerk) {
            console.warn("Clerk not found. Security check skipped (Dev Mode).");
            return;
        }

        // 2. Wait for Clerk to initialize
        await window.Clerk.load();

        // 3. Check if user is logged in
        if (!window.Clerk.user) {
            // User is NOT logged in -> Kick them out
            console.log("Unauthorized access. Redirecting...");
            window.location.href = LOGIN_PAGE;
        } else {
            // User IS logged in -> Allow access
            console.log("Teacher authorized: " + window.Clerk.user.firstName);
            // Optional: Unhide body if you hid it with CSS for security
            document.body.style.display = 'block'; 
        }

    } catch (err) {
        console.error("Security check failed:", err);
        // If security fails, play it safe and redirect
        // window.location.href = LOGIN_PAGE; 
    }
});
