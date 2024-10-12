# AI_Banking

**AI_Banking** is a simple voice-assisted web application that allows users to interact with a virtual assistant (Dbot) for various banking-related tasks. This project is built using HTML, CSS, and JavaScript, leveraging the Web Speech API for speech recognition and speech synthesis.

## Features
- **Speech Recognition**: The application listens for spoken commands and processes them.
- **Speech Synthesis**: The assistant responds to queries via speech, using a human-like voice.
- **Banking Operations**: Dbot can open banking websites, provide information about banks, and offer simple interactions like saying your name or other custom phrases.
- **Simple Banking Commands**: Users can open websites like SBI, ICICI, RBI, and more using voice commands.

## Commands Overview
Dbot responds to various voice commands like:
- "How are you?" 
- "Tell about me"
- "Hey Dbot, what is my country name?"
- "Open Google/Facebook"
- "Open SBI/ICICI/RBI/bob"
- "What is SBI/ICICI/RBI/bob?"
- "Tell me about SBI/ICICI/RBI/bob?"
- "Who is mam?" (Special command to provide AI teacher details)

## Installation
1. Clone or download the project files.
2. Open the `index.html` file in your web browser.

## Usage
1. Click the button on the webpage to start interacting with Dbot.
2. Speak one of the predefined commands.
3. Dbot will respond to the command, either by speaking back or performing an action like opening a bank website.

## Technologies Used
- **HTML**: For structuring the webpage.
- **CSS**: For basic styling.
- **JavaScript**: For functionality and interactivity using the Web Speech API.
  - `window.speechRecognition` or `window.webkitSpeechRecognition` for speech recognition.
  - `SpeechSynthesisUtterance()` for converting text to speech.

## How It Works
- The app uses the Web Speech API to listen for and recognize voice commands.
- When a valid command is detected, Dbot responds by speaking or performing predefined actions, such as opening a banking website or answering questions about specific banks.
- Example commands:
  - Saying "Open Google" will prompt Dbot to respond with "Opening Google for you now" and open Google's homepage.
  - Saying "Tell me about SBI" will result in a spoken response with information about the State Bank of India.

## Future Enhancements
- Add more complex interactions for different banking tasks.
- Implement a more dynamic conversation with Natural Language Processing (NLP).
- Provide voice-based account operations (e.g., checking account balance, transactions).

## Contributing
Feel free to fork this repository and contribute to the project by adding new features or improving existing ones.

## License
This project is open-source and available under the MIT License.
