 function generatePassword() {
            const genericwords = ["Honeydew", "Building", "Tablet", "Cheese", "Monitor", "Balloon", "Umbrella", "Guitar", "Pillow", "Tomato", "Cactus", "Rainbow", "Computer", "Elephant", "Flower", "Mountain", "Pineapple", "Snowball", "Sunshine", "Turtle", "Volcano", "Watermelon", "Photograph", "Dolphin", "Castle", "Dragon", "Firework", "Galaxy", "Jellyfish", "Kangaroo", "Lighthouse", "Marshmallow", "Ninja", "Octopus", "Parrot", "Quilt", "Rocket", "Squirrel", "Tiger", "Unicorn", "Vampire", "Whale", "Xylophone", "Yacht", "Zebra"];
            const complexwords = ["Algorithm", "Encryption", "Decryption", "Hashing", "Authentication", "Authorization", "Firewall", "Intrusion", "Detection", "Prevention", "Vulnerability", "Exploit", "Penetration", "Testing", "Malware", "Ransomware"];
            const symbols = ["@", "$", "!", "&" , "#", "?"]
            const randomIndex1 = Math.floor(Math.random() * genericwords.length);
            const randomIndex2 = Math.floor(Math.random() * genericwords.length);
    
            if (randomIndex2 === randomIndex1) {
                randomIndex2 = (randomIndex1 + 1) % genericwords.length; 
            }
            const randomIndex3 = Math.floor(Math.random() * complexwords.length);
            if (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
                randomIndex3 = (randomIndex3 + 1) % complexwords.length; 
            }
            const randomSymbol = Math.floor(Math.random() * symbols.length);


            const password = genericwords[randomIndex1] + genericwords[randomIndex2] + complexwords[randomIndex3] + Math.floor(Math.random() * 100 ) + symbols[randomSymbol];
            document.getElementById("password").innerHTML = password;
        }
