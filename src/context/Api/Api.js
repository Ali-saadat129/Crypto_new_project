
import axios from "axios";

const DataRequest = async () => {
  try {
    const response = await axios.get('/data.json');
    const walletdata = await axios.get('/wallet.json');
    
    if (response.status !== 200 || walletdata.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    const data = response.data;
    const walletData = walletdata.data;

    return { data: data, walletData: walletData };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default DataRequest;







// import axios from "axios";


// const DataRequest = async () => {
//   try {
//     const response = await fetch('../../../public/data.json');
//     const walletdata = await fetch('/wallet.json');
//     if (!response.ok || !walletData.ok ) {
//       throw new Error('Failed to fetch data');
//     }

//     const data = await response.json();
//     const walletData = await walletdata.json();
//     return {Data:data,walletData:walletData};
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// };

// export default DataRequest;
