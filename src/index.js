module.exports = function toReadable (number) {
    let str = number.toString();
    let newStr = '';
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    switch (str.length) {
        case 1 : {
                switch (number) {
                    case 0 : return 'zero'; 
                    case 1 : return 'one';
                    case 2 : return 'two';
                    case 3 : return 'three';
                    case 4 : return 'four';
                    case 5 : return 'five';
                    case 6 : return 'six';
                    case 7 : return 'seven';
                    case 8 : return 'eight';
                    case 9 : return 'nine';
                }
            }; break; 
        case 2 : {
            if (number < 20) {
                switch (number) {
                    case 10 : return arr2[0];
                    case 11 : return arr2[1];
                    case 12 : return arr2[2];
                    case 13 : return arr2[3];
                    case 14 : return arr2[4];
                    case 15 : return arr2[5];
                    case 16 : return arr2[6];
                    case 17 : return arr2[7];
                    case 18 : return arr2[8];
                    case 19 : return arr2[9];                
                };
            }
            switch(str[0]) {
                case '2' : newStr += arr3[0] + ' '; break;
                case '3' : newStr += arr3[1] + ' '; break;
                case '4' : newStr += arr3[2] + ' '; break;
                case '5' : newStr += arr3[3] + ' '; break;
                case '6' : newStr += arr3[4] + ' '; break;
                case '7' : newStr += arr3[5] + ' '; break;
                case '8' : newStr += arr3[6] + ' '; break;
                case '9' : newStr += arr3[7] + ' '; break;                
            };
            switch (str[1]){
                case '0' : newStr = newStr.slice(0, -1); break;
                case '1' : newStr += arr1[1]; break;
                case '2' : newStr += arr1[2]; break;
                case '3' : newStr += arr1[3]; break;
                case '4' : newStr += arr1[4]; break;
                case '5' : newStr += arr1[5]; break;
                case '6' : newStr += arr1[6]; break;
                case '7' : newStr += arr1[7]; break;
                case '8' : newStr += arr1[8]; break;
                case '9' : newStr += arr1[9]; break;
            };
            return newStr;
        }; 
        case 3 : {
            switch (str[0]){
                case '1' : newStr += arr4[0] + ' '; break;
                case '2' : newStr += arr4[1] + ' '; break;
                case '3' : newStr += arr4[2] + ' '; break;
                case '4' : newStr += arr4[3] + ' '; break;
                case '5' : newStr += arr4[4] + ' '; break;
                case '6' : newStr += arr4[5] + ' '; break;
                case '7' : newStr += arr4[6] + ' '; break;
                case '8' : newStr += arr4[7] + ' '; break;
                case '9' : newStr += arr4[8] + ' '; break;
            };
            switch (str[1]){
                case '0' : {
                    switch (str[2]){
                        case '1' : newStr += arr1[1]; return newStr;
                        case '2' : newStr += arr1[2]; return newStr;
                        case '3' : newStr += arr1[3]; return newStr;
                        case '4' : newStr += arr1[4]; return newStr;
                        case '5' : newStr += arr1[5]; return newStr;
                        case '6' : newStr += arr1[6]; return newStr;
                        case '7' : newStr += arr1[7]; return newStr;
                        case '8' : newStr += arr1[8]; return newStr;
                        case '9' : newStr += arr1[9]; return newStr;
                    };
                }; break;
                case '1' : {
                    switch (str[2]){
                        case '0' : newStr += arr2[0]; return newStr;
                        case '1' : newStr += arr2[1]; return newStr;
                        case '2' : newStr += arr2[2]; return newStr;
                        case '3' : newStr += arr2[3]; return newStr;
                        case '5' : newStr += arr2[5]; return newStr;
                        case '4' : newStr += arr2[4]; return newStr;
                        case '6' : newStr += arr2[6]; return newStr;
                        case '7' : newStr += arr2[7]; return newStr;
                        case '8' : newStr += arr2[8]; return newStr;
                        case '9' : newStr += arr2[9]; return newStr;
                    };
                }; break;
                case '2' : newStr += arr3[0] + ' '; break;
                case '3' : newStr += arr3[1] + ' '; break;
                case '4' : newStr += arr3[2] + ' '; break;
                case '5' : newStr += arr3[3] + ' '; break;
                case '6' : newStr += arr3[4] + ' '; break;
                case '7' : newStr += arr3[5] + ' '; break;
                case '8' : newStr += arr3[6] + ' '; break;
                case '9' : newStr += arr3[7] + ' '; break;
            };
            switch (str[2]){
                case '0' : newStr = newStr.slice(0, -1); break;
                case '1' : newStr += arr1[1]; break;
                case '2' : newStr += arr1[2]; break;
                case '3' : newStr += arr1[3]; break;
                case '4' : newStr += arr1[4]; break;
                case '5' : newStr += arr1[5]; break;
                case '6' : newStr += arr1[6]; break;
                case '7' : newStr += arr1[7]; break;
                case '8' : newStr += arr1[8]; break;
                case '9' : newStr += arr1[9]; break;
            };
            return newStr;

        }; 
        default : 'Nothing to return'
    }
    
}
