export function fileToBase64(file) {
    return new Promise(resolve => {
        let fileReader = new FileReader();

        fileReader.onload = function () {
            resolve(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    });
}

export function base64ToArrayBuffer(base64) {
    let binary_string =  window.atob(base64);
    let len = binary_string.length;
    let bytes = new Uint8Array( len );
    for (let i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

export function downloadBase64File(file, fileName){
    let byteArray = base64ToArrayBuffer(file);
    let blob = new Blob([byteArray], {type: "application/octet-stream"});
    let link = document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download=fileName;
    link.click();
}