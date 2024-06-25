    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

    const arrResult = [];
    const arrSorted = [];

    for (let i = 0; i < input.length; i++) {
        const str = input[i];
        const sortedStr = str.split('').sort().join('');
        
        let found = false;

        // Tìm nhóm tương ứng với sortedStr
        for (let j = 0; j < arrSorted.length; j++) {
            if (arrSorted[j] === sortedStr) {
                arrResult[j].push(str);
                found = true;
                break;
            }
        }

        // Nếu không tìm thấy nhóm nào, tạo nhóm mới
        if (!found) {
            arrSorted.push(sortedStr);
            arrResult.push([str]);
        }
    }
    
    console.log(arrResult);
