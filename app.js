const button=document.querySelector("button");

const speechRecognition=window.speechRecognition || window.webkitSpeechRecognition;

const recognition=new speechRecognition();

recognition.onstart=function()
{
    console.log("Speech Recognition started!");
};

recognition.onresult = function(event)
{
 console.log (event);
 const spokenwords=event.results[0][0].transcript;
 console.log("spoken words are",spokenwords);
 computerSpeech(spokenwords);
};

function computerSpeech(words)
{
  const speech = new SpeechSynthesisUtterance(); 
  speech .lang= "en-us";
  speech .pitch=0.9;
  speech.volume=1;
  speech.rate =1;
//   speech.text = words;
determinewords(speech,words);

  window.speechSynthesis.speak(speech);
}


function determinewords (speech,words)
{
    if (words.includes("how are you"))
    {
        speech.text= (" I am fine ,thank you !");
    }

    if (words.includes(" tell about me"))
    {
        speech.text= (" you are my master !");
    }

    if (words.includes("hey debot what is my country name"))
    {
        speech.text= ("India");
    }

    if (words.includes("hey debot open Facebook"))
    {
        speech.text= ("Opening Facebook for you now");
        window.open("https://www.facebook.com/");
    }

    

    if (words.includes("open Google"))
    {
        speech.text= ("Opening Google for you now");
        window.open("https://www.google.com/");
    }

    

    if (words.includes("what is your name"))
    {
        speech.text= ("my name is Dbot");
       
    }

    if (words.includes("open SBI"))
    {
        speech.text= ("hey Dipanjan opening SBI for you");
        window.open("https://www.onlinesbi.sbi/");
    }

    if (words.includes("tell me about SBI"))
    {
        speech.text= ("State Bank of India (SBI) a Fortune 500 company, is an Indian Multinational, Public Sector Banking and Financial services statutory body headquartered in Mumbai. The rich heritage and legacy of over 200 years, accredits SBI as the most trusted Bank by Indians through generations.");
       
    }


    if (words.includes("open ICICI"))
    {
        speech.text= ("opening ICICI bank for you");
        window.open("https://www.icicibank.com/");
    }

    if (words.includes("What is ICICI"))
    {
        speech.text= ("ICICI was formed in 1955 at the initiative of the World Bank, the Government of India and representatives of Indian industry. The principal objective was to create a development financial institution for providing medium-term and long-term project financing to Indian businesses. Until the late 1980s, ICICI primarily focused its activities on project finance, providing long-term funds to a variety of industrial projects. With the liberalization of the financial sector in India in the 1990s, ICICI transformed its business from a development financial institution offering only project finance to a diversified financial services provider that, along with its subsidiaries and other group companies, offered a wide variety of products and services.");
        
    }

    if (words.includes("open RBI"))
    {
        speech.text= ("opening RBI bank for you");
        window.open("https://www.rbi.org.in/");
    }

    if (words.includes("what is RBI"))
    {
        speech.text= ("The Reserve Bank of India, chiefly known as RBI, is India's central bank and regulatory body responsible for regulation of the Indian banking system. It is under the ownership of Ministry of Finance, Government of India. It is responsible for the control, issue and maintaining supply of the Indian rupee. It also manages the country's main payment systems and works to promote its economic development. Bharatiya Reserve Bank Note Mudran (BRBNM) is a specialised division of RBI through which it prints and mints Indian currency notes (INR) in four of its currency printing presses located in Nashik (Maharashtra; Western India), Dewas (Madhya Pradesh; Central India), Mysore (Karnataka; Southern India) and Salboni (West Bengal; Eastern India).[5] The RBI established the National Payments Corporation of India as one of its specialised division to regulate the payment and settlement systems in India. Deposit Insurance and Credit Guarantee Corporation was established by RBI as one of its specialised division for the purpose of providing insurance of deposits and guaranteeing of credit facilities to all Indian banks.");
        
    }

    
    
    if (words.includes("open bob"))
    {
        speech.text= ("opening bob bank for you");
        window.open("https://www.bankofbaroda.in/");
    }

    if (words.includes("open paymentgateway"))
    {
        speech.text= ("opening  paymentgateway for you");
        window.open("http://127.0.0.1:5501/About.html");
    }


    
    if (words.includes("what is bob"))
    {
        speech.text= ("Bank of Baroda (BOB or BoB) is an Indian public sector bank headquartered in Vadodara, Gujarat. It is the second largest public sector bank in India after State Bank of India, with 132 million customers, a total business of US$218 billion, and a global presence of 100 overseas offices. Based on 2019 data, it is ranked 1145 on Forbes Global 2000 list");
        
    }

    if (words.includes("who is mam"))
    {
        speech.text("your ai teacher name is Ankita Wadhawan she seats 33 block 203 room and cabin no CH20 ");
    }

 

    

    
    

}


button.addEventListener("click",()=>
{
    recognition.start();

});