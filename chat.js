(function() {
const SIZE = 60 // size of the chat button in pixels
const BTN_RAD = SIZE / 2 // radius of the chat button in pixels
const BG_CHAT = 'purple' // background color of the chat button
let arr;
const chatButtonLogo = `
<svg width="80" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="#FFFFFF"></path>
      <circle cx="10" cy="12" r="1.3" fill="#FFFFFF"></circle>
      <circle cx="16" cy="12" r="1.3" fill="#FFFFFF"></circle>
    </svg>
`

const chatButtonClose = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`
// creat the chat button element
const chatButton = document.createElement('div')
// apply styles to the chat button
chatButton.setAttribute('id', 'chat-bubble-button')
chatButton.style.position = 'fixed'
chatButton.style.bottom = '20px'
chatButton.style.width = SIZE + 'px'
chatButton.style.height = SIZE + 'px'
chatButton.style.borderRadius = BTN_RAD + 'px'
chatButton.style.backgroundColor = BG_CHAT
chatButton.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
chatButton.style.cursor = 'pointer'
chatButton.style.zIndex = 999999999
chatButton.style.transition = 'all .2s ease-in-out'

chatButton.addEventListener('mouseenter', (event) => {
  chatButton.style.transform = 'scale(1.05)'
})
chatButton.addEventListener('mouseleave', (event) => {
  chatButton.style.transform = 'scale(1)'
})

// create the chat button icon element
const chatButtonIcon = document.createElement('div')

// apply styles to the chat button icon
chatButtonIcon.style.display = 'flex'
chatButtonIcon.style.alignItems = 'center'
chatButtonIcon.style.justifyContent = 'center'
chatButtonIcon.style.width = '100%'
chatButtonIcon.style.height = '100%'
chatButtonIcon.style.zIndex = 999999999

// add the chat button icon to the chat button element
chatButtonIcon.innerHTML = chatButtonLogo

chatButton.appendChild(chatButtonIcon)

// Create notification bubble element
const notificationBubble = document.createElement('div')

// Apply styles to the notification bubble
notificationBubble.style.position = 'absolute'
notificationBubble.style.top = '-7px'
notificationBubble.style.right = '-1px'
notificationBubble.style.width = '20px'
notificationBubble.style.height = '20px'
notificationBubble.style.borderRadius = '50%'
notificationBubble.style.backgroundColor = 'red'
notificationBubble.style.color = 'white'
notificationBubble.style.display = 'flex'
notificationBubble.style.alignItems = 'center'
notificationBubble.style.justifyContent = 'center'
notificationBubble.style.zIndex = 1000000000
notificationBubble.style.fontSize = '12px'

// Add "1" inside the notification bubble
notificationBubble.innerHTML = "1"

// Add the notification bubble to the chat button
chatButton.appendChild(notificationBubble)

// toggle the chat component when the chat button is clicked
let firstClick = true
chatButton.addEventListener('click', () => {

  popup.style.opacity = 0;
  popup.style.visibility = 'hidden';
  
  // Remove the red notification on first click
  if (firstClick) {
    notificationBubble.style.display = 'none'
    localStorage.setItem('popupClosed', 'true'); // Set flag in localStorage
    firstClick = false
  }

  // Toggle the chat component
  if (chat.style.display === 'none') {
    chat.style.display = 'flex'
    chatButtonIcon.innerHTML = chatButtonClose
  } else {
    chat.style.display = 'none'
    chatButtonIcon.innerHTML = chatButtonLogo
  }
})

function adjustForSmallScreens() {
  const smallScreenHeight = 600;
  if (window.innerHeight < smallScreenHeight) {
      chat.style.height = '85vh';
  }
}


const chat = document.createElement('div')
chat.setAttribute('id', 'chat-bubble-window')

chat.style.position = 'fixed'
chat.style.flexDirection = 'column'
chat.style.justifyContent = 'space-between'
chat.style.bottom = '80px'
chat.style.width = '85vw'
chat.style.height = '70vh'
chat.style.boxShadow =
  'rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px'
chat.style.display = 'none'
chat.style.borderRadius = '10px'
chat.style.zIndex = 999999999
chat.style.overflow = 'hidden'

adjustForSmallScreens();

const chatHeader = document.createElement('div');
chatHeader.style.display = 'flex';
chatHeader.style.justifyContent = 'flex-end';
chatHeader.style.alignItems = 'center';
chatHeader.style.padding = '5px';
chatHeader.style.backgroundColor = '#f5f5f5';
chatHeader.style.boxShadow = '0px 1px 10px rgba(0, 0, 0, 0.1)';
chatHeader.style.zIndex = 99999999999999999999;

const chatCloseButton = document.createElement('div');
chatCloseButton.id = "chatCloseButton"
chatCloseButton.style.cursor = 'pointer';
chatCloseButton.style.transition = 'all .2s ease-in-out';
chatCloseButton.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" width="18" height="18">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>
`;

chatCloseButton.addEventListener('mouseenter', (event) => {
  chatCloseButton.style.transform = 'scale(1.2)';
});
chatCloseButton.addEventListener('mouseleave', (event) => {
  chatCloseButton.style.transform = 'scale(1)';
});

chatCloseButton.addEventListener('click', () => {
  chat.style.display = 'none';
  chatButtonIcon.innerHTML = chatButtonLogo;
});

const chatBody = document.createElement('div');
chatBody.style.width = '100%';
chatBody.style.height = 'calc(100% - 10px)'; // Adjust this value based on the height of the header
chatBody.style.overflow = 'auto';

// Create popup element
const popup = document.createElement('div');

// Apply styles to the popup
popup.style.position = 'fixed';
popup.style.right = '10px'; // Adjust this value to position the popup to the left of the chat button
popup.style.bottom = '100px'; // Adjust this value to position the popup vertically above the chat button
popup.style.minWidth = '200px';
popup.style.maxWidth = '400px'; // Set a limit on the horizontal scaling
popup.style.maxHeight = '100px'; // Set a limit on the vertical scaling
popup.style.padding = '10px 20px';
popup.style.borderRadius = '30px';
popup.style.backgroundColor = 'white';
popup.style.color = 'black';
popup.style.display = 'flex';
popup.style.alignItems = 'center';
popup.style.justifyContent = 'space-between';
popup.style.boxShadow = '0 10px 20px 0 rgba(0, 0, 0, 0.3)'; // More pronounced shadow
popup.style.zIndex = 999999998;
popup.style.opacity = 0;
popup.style.visibility = 'hidden';
popup.style.transition = 'all .5s ease-in-out';
popup.style.fontFamily = 'Roboto, sans-serif'; // Use the imported font
popup.style.border = '1px solid #ddd'; // Add a border
popup.style.transform = 'scale(0)'; // Start from a scaled down state



// Add emoji, text, and close button to the popup
popup.innerHTML = `
    <span id="popup-text" style="margin: 10px 10px;"></span>

  <button id="popup-close-button" style="background: none; border: none; cursor: pointer; position: absolute; top: 2px; right: 1px;">
    <svg xmlns="https://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="close" width="20" height="20">
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.7,14.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0
L12,13.4l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3L8.3,9.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.3,2.3
l2.3-2.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L13.4,12L15.7,14.3z" fill="black"></path>
    </svg>
  </button>
`;


function showPopup() {

  if (!arr[7] || localStorage.getItem('popupClosed') === 'true') { //empty string return
    return;
  }
  // Get the close button
  const closeButton = document.getElementById('popup-close-button');
  closeButton.style.opacity = 1;


  // Hide the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';
    localStorage.setItem('popupClosed', 'true'); // Set flag in localStorage
  });

  setTimeout(() => {
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    popup.style.transform = 'scale(1)'; // Scale up when showing the popup
  }, 3000); // Show the popup after 3 seconds
}

const scriptTag = document.currentScript
const urlBase = "https://arm.chatshape.com/"
const headers = {'Content-Type':'application/json'}
console.log(scriptTag);

// Clean scriptTag.id of spaces
scriptTag.id = scriptTag.id.replace(/\s/g, '');
console.log(scriptTag);

let botName = scriptTag.id.substring(0, scriptTag.id.indexOf("-")).trim();
let botID = scriptTag.id.replace(/.*?-/, "").trim();
// if (hideRed == "true" || localStorage.getItem('popupClosed') === 'true') {
notificationBubble.style.visibility = 'hidden'

// Detect mobile  
var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
console.log("isMobile: ", isMobile)

console.log("orders: ", window.chatshapeOrders)
console.log(window.chatshapeShopifyCustomer)
function init() {

    chatBody.innerHTML = `<iframe
    src="https://www.chatshape.com/chatbot-i/${scriptTag.id}"
    width="100%"
    height="100%"
    frameborder="0"
    ></iframe>`;

    chat.appendChild(chatBody);


    document.body.appendChild(chat)
    // Add the popup to the body
    document.body.appendChild(popup);

    const getColor = async () => {
      const response = await fetch(urlBase + "getInit", {
          headers: headers,
          method: "POST",
          body: JSON.stringify({"name": botName, "uuid" : botID}),
      });
      const string = await response.json();
      arr = string === "" ? [] : string;
      chatButton.style.backgroundColor = arr[2]
      const isLeftSide = (arr[3]);
      if (isLeftSide) {
        chatButton.style.left = '20px';
        chatButton.style.right = 'unset'
        chat.style.left = '20px';
        chat.style.right = 'unset'
        popup.style.right = 'unset';
        popup.style.left = '10px';
      } else if (isMobile) {
          // full screen
          chat.style.position = 'fixed';
          chatButton.style.right = '20px'
          chatButton.style.left = 'unset'
          chat.style.width = '100%';
          chat.style.height = '87%';
      } else {
        chatButton.style.right = '20px'
        chatButton.style.left = 'unset'
        chat.style.right = '20px'
        chat.style.left = 'unset'
      }
      document.body.appendChild(chatButton)
      chatHeader.appendChild(chatCloseButton);

      chat.prepend(chatHeader);
      // Update the popup text
      const popupText = document.getElementById('popup-text');
      popupText.textContent = arr[7] ? arr[7] : '';
      // Show the popup only if arr[7] is not an empty string
      if (arr[7]) {
        showPopup();
      }
    }
      
    getColor()
    adjustForSmallScreens()
}
if (document.readyState === 'complete') {
    init();
} else {
    window.addEventListener('load', init);
}

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 550px)')

function handleSizeChange(e) {
  // Check if the media query is true
  if (e.matches) {
    chat.style.height = '600px'
    chat.style.width = '450px'
  }
}

// Register event listener
mediaQuery.addEventListener('change', handleSizeChange)

// Initial check
handleSizeChange(mediaQuery)

})(); // End of IIFE
