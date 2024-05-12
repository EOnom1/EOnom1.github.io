function updateEquipment() {
    let equipment;
    let storedEquipment;
    // Get log of donators from the user's storage
    storedEquipment = (+localStorage.getItem('storedEquipment'));
    // The local storage won't exist until the page has been run for the first time. So it's set to the page value.
    if(storedEquipment < 3000 || storedEquipment == null){
        storedEquipment = (+document.querySelector("#stats > h2").textContent);
    }
    // Get equipment element from HTML
    equipment = (+document.querySelector("#stats > h2").textContent);
    // Increment donators by 1
    equipment = storedEquipment + 1
    // Access the local storage (users device) to update the donators for next time. It's stored as a JSON so has to be
    // converted back to a string.
    localStorage.setItem('storedEquipment', JSON.stringify(equipment));
    // Update website with new equipment value
    document.querySelector("#stats > h2").textContent = equipment;
    setTimeout(updateEquipment, 2000);
    }
    updateEquipment()