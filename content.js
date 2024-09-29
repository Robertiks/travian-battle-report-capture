// Inject a new button to download the screenshot
function addDownloadButton() {
    let toolList = document.querySelector('.toolList');
    if (toolList) {
        let downloadButton = document.createElement('button');
        downloadButton.style.marginLeft = '10px';
        downloadButton.style.cursor = 'pointer';
        downloadButton.style.background = 'none';
        downloadButton.style.border = 'none';

        // Add an icon to the button (Base64 encoded image)
        let icon = document.createElement('img');
        icon.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAiQAAAIkBOZtwtgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAT5SURBVEiJrZJbTFRXFIYXZ/aec85czsDcL84MMyLXlrESEA2NrVwkaqU1qT5IUqumNn3QQlOq1oQHH9omxmijD5oakypBIFVbK+K1plQrYJBGRakOxqboDDDMMAww17P6IikSULFdyX7ZWev7/3+vLeE4rlupUgnh8fF2AEjA/1NSVUpKDSAclCgUCk4QhF1yhWIjJiU9iUYit/8Lmef5NYIq5UeO41eKCHsAACQGo9F9qfV3/OjjT4ZNJvM9Qsibr8DOV2t1XcXLVw0fqDuFKVpdLwAQAAAghBSXr1g56PGH8HrnLVxaUuozWywXAcDxEmCHWqM/t6CwqP/IyQvY0tGDi98u9RFCip/pMhqNV85c+EX0+EPo8Yfw9LlLoj011UMpLZiJTCktMJqtnj2Hj4stHT3Y0tGDe480ihqt7sq0TtIzMvsf+4Lo8YfwsS+It3p6ce7cNC/P84umgeeZrPYndc2teLb9HrZ09ODZ9ntod6Z5ASBtoo+ZNPPQP+Q/3lB/LCKKIqxbsxqCwSCcaj6vN5stpyaLUErztEbzz7sPHjOGx8dg59ZNgKIIF07/EA2NjDQCwIOZUiuMZktf1937eO3GH/i6az7+ev0Gdt29j6kOh5dSWkApLTBZbN665lY8fOI8pmXm4KHGM1jX3IpavaEPABQzwSfcLXA4nU9udv/5jMitnl50OJwDWr3RNx3cPMfeT3l+4XPhLyOSO38B7vx636vDX0bE7nDil1/tw/pzV9Fic3gpzxfOCj5ZxJ6a6p0pic5gGpqt82QAyJs4hJAlOoNpMNf1Bk67E6dzgOO4pZNnnjKmL0JIOWGYeJnNGii32wKCXB481NSMO7/5Fq32VJz6u1rbOlGtUgU/cGUE1uWmByjDxFlCyp8bQZBKK7NSkgcblpVgbX5ewmowheZmZGHt7gM4keRqRxe+luvCzPSM0PerS2O9WytxkdU4qOa4TVN5zNSLYDR67K/R0Z92tHWEstUpzHqriY8GAqMWWyp4vJ6hd5eXDYiiCPFweLQm28oWWQ3kvYaW0O2BoeahcPi7Fy5BwdMtNp0Q/GJNYThHqx5uLC/F2vy8hCCTjRBClhBClqhVqmD9+8ti7i2VWDjHENy+tjDsMKpGVHJpzUwJBABgBZ791KJV7kq3pigDY+PsO8UZ7Lbr7aEcjZpZqFFH4/F4LB6Px5bZDLECk45UNJwdXVrklI5EoqzdoFIYNYrtSl5aAwDsUyYwAKAXeLZTxtJui05RCwDC2rcy4X5fAOqvdMe8Y2NNtW0dvgRi0oQrRITKkxd9j/zBE3WX70S7H/lgXXEWAELyHJ1yh4Kl3QLPdgKAHmQsdVdX5Cc2lLiiWTZN4Oi2FZhhVWOWXRNQ8uznAABKStdLkpLiALAYABYThomrOe7DiSdNn6P2Z1jVeHTbCsy2a4c3lroi1RX5CRlL3RJWKsGB4bHCVQvnKThKJEcv3xklDBP+uz9UOzIe2QMAEBXFLkYiuYGINwFgMIlhfhuLxZoAAKJxsS0SFwNKmbTo2p2+aOE8C5eXZpQ2Xe3xD49F9wIAgJynVdlWjW//5jLcWOKKyjnpQwDgXvgj/i1OxlL3hlJXZP/mMsyxaf3JPPvZMx1ynlblWDVD1RX5CYFnHwCAchYCSkHGuqsr8hM5Vs2QnKdV03bJeVolY6kbAPSzgE+UXsZS91T4P+qXZlq0D388AAAAAElFTkSuQmCC';  // Adds download image
        icon.alt = 'Download Screenshot';
        icon.style.width = '24px';  // Adjust icon size
        icon.style.height = '24px';
        downloadButton.appendChild(icon);

        // Add a fallback in case the icon fails to load
        icon.onerror = function() {
            console.log('Icon failed to load, reverting to text.');
            downloadButton.innerText = "Download Screenshot"; // Fallback text
        };

        toolList.appendChild(downloadButton);

        // Attach click event to the button
        downloadButton.addEventListener('click', () => {
            captureScreenshot();
        });
    } else {
        //console.log("Download button did not injecet"); 
    }
}

// Capture the screenshot and automatically download the image
function captureScreenshot() {
    let reportWrapper = document.getElementById('reportWrapper');
    if (reportWrapper) {
       // console.log("Capturing screenshot with html2canvas");
        html2canvas(reportWrapper, { 
            useCORS: true,  
            allowTaint: true,
            logging: true,
            scale: 2, // Enhances screenshot quality
            backgroundColor: null  // transparent background
        }).then(canvas => {
            let screenshot = canvas.toDataURL('image/png');
            downloadImage(screenshot, generateUniqueFilename());
        }).catch(error => {
            console.error('Error capturing screenshot:', error);
        });
    } else {
       console.log("Unknonw error at downloading or report wrapper issue"); 
    }
}

// Function to trigger download
function downloadImage(dataUrl, filename) {
    let link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    //console.log("Screenshot downloaded");
}

// Generate a unique filename using the current timestamp and random characters
function generateUniqueFilename() {
    let timestamp = Date.now();
    let randomString = Math.random().toString(36).substring(2, 6);
    return `travian_report_${timestamp}_${randomString}.png`;
}

// Initialize when content script is loaded
addDownloadButton();
