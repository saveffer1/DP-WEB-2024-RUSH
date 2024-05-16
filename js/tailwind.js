// const tailwindcdnlink = "https://cdn.tailwindcss.com";

function initTailwindScript(source){
    const tailwindScript = document.createElement('script');
    tailwindScript.src = source;
    return tailwindScript;
}

// tailwind configuration
tailwindScript = initTailwindScript("https://cdn.tailwindcss.com");
tailwindScript.onload = function(){
    // add custom tailwind configuration here
    window.tailwind.config = {
        theme: {
            extend: {
                colors: {
                    clifford: '#00ff00',
                }
            }
        }
    }

    console.log("Tailwind CSS loaded successfully");
}

document.head.appendChild(tailwindScript);
