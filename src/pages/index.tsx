import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function PreviewDocs() {
    const params = useParams()

    return(
        <DocViewer pluginRenderers={DocViewerRenderers} documents={[
            {
                uri : "/api/approve-signature/"+params.id,
                fileType :"docx",
                
            }
        ]} >
        
        </DocViewer>
    )
}