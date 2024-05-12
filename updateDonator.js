function updateDonator() {
    let donators;
    let storedDonators;
    // Get log of donators from the user's storage
    storedDonators = (+localStorage.getItem('storedDonators'));
    // The local storage won't exist until the page has been run for the first time. So it's set to the page value.
    if(storedDonators < 200 || storedDonators == null){
        storedDonators = (+document.querySelector("#stats > h3").textContent);
    }
    // Get donator element from HTML
    donators = (+document.querySelector("#stats > h3").textContent);
    // Increment donators by 1
    donators = storedDonators + 1
    // Access the local storage (users device) to update the donators for next time. It's stored as a JSON so has to be
    // converted back to a string.
    localStorage.setItem('storedDonators', JSON.stringify(donators));
    // Update website with new donator value
    document.querySelector("#stats > h3").textContent = donators;
    setTimeout(updateDonator, 10000);
    }
    updateDonator()