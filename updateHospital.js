function updateHospital() {
    let hospital;
    let storedHospital;
    // Get log of donators from the user's storage
    storedHospital = (+localStorage.getItem('storedHospital'));
    // The local storage won't exist until the page has been run for the first time. So it's set to the page value.
    if(storedHospital < 2400 || storedHospital == null){
        storedHospital = (+document.querySelector("#stats > h1").textContent);
    }
    // Get hospital element from HTML
    hospital = (+document.querySelector("#stats > h1").textContent);
    // Increment donators by 1
    hospital = storedHospital + 1
    // Access the local storage (users device) to update the donators for next time. It's stored as a JSON so has to be
    // converted back to a string.
    localStorage.setItem('storedHospital', JSON.stringify(hospital));
    // Update website with new equipment value
    document.querySelector("#stats > h1").textContent = hospital;
    setTimeout(updateHospital, 4000);
    }
    updateHospital()