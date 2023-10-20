import axios from "axios";


const DataRequest = async () => {
  try {
    const response = await fetch('/data.json');
    const walletdata = await fetch('/wallet.json');
    if (!response.ok  ) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    const walletData = await walletdata.json();
    return {data:data,walletData:walletData};
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default DataRequest;
