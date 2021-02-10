import React, { useState, useRef } from 'react';
import rulesPdf from '../static/rulesPdf.pdf'
import { Grid } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';
import Spinner from "../components/Spinner"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Rules = () => {
    const [numPages, setNumPages] = useState(0);
    const documentWrapperRef = useRef();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
          textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });
      }

    return (
        <Grid ref={documentWrapperRef}>
            <Document
                file={rulesPdf}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<Spinner />}
            >
                {Array.from(
                    new Array(numPages),
                    (el, index) => (
                        <Page
                            onLoadSuccess={removeTextLayerOffset}
                            width={documentWrapperRef.current?.getBoundingClientRect().width - 20 || undefined}
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                        />
                    ),
                )}
            </Document>
        </Grid>);
};

export default Rules;