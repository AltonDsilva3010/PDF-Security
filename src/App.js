import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import AllBooks from "./Components/AllBooks";
import Bookviewer from "./Components/Bookviewer";
import abi from "./contracts/AuctionStrore.json";
import AddaBook from "./Components/AddaBook";
const { ethers } = require("ethers");

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [cid, setCID] = useState(
    "QmZmdtexNQFuBVNQyF4ZbmYB7yK77uYN97izoE1yyF1QvL"
  );

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x78b190cc9165110C14FF12504461430294Dd96E4";
      const contractABI = abi.abi;
      try {
        let provider = new ethers.BrowserProvider(window.ethereum);
        let signer = await provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await axios.get(`https://ipfs.io/ipfs/${cid}`, {
          responseType: "blob",
        });
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfUrl);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };
    fetchPDF();
    setPageNumber(1);
  }, [cid]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  return (
    <div className="App">
      <Navbar />
      <AddaBook />
      <AllBooks setCID={setCID} />
      <Bookviewer
        pdfUrl={pdfUrl}
        onDocumentLoadSuccess={onDocumentLoadSuccess}
        pageNumber={pageNumber}
        changePage={changePage}
        numPages={numPages}
      />
    </div>
  );
}

export default App;
