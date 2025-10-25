import React from 'react';
import { CITATIONS } from '../../data/citations';
import { Typography, Link } from '@mui/material';

const CitationLink = ({ citationKey }) => {
    const citation = CITATIONS[citationKey];
    if (!citation) return null;

    return (
        <sup id={`ref-${citation.id}`}>
            <Link href={`/references#cite-${citation.id}`} sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
                [{citation.id}]
            </Link>
        </sup>
    );
};
export default CitationLink;