import React from 'react';
import { CITATIONS } from '../../data/citations';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CitationLink = ({ citationKey }) => {
    const citation = CITATIONS[citationKey];
    if (!citation) return null;

    return (
        <sup id={`ref-${citation.id}`}>
            <Link
                to={`/references#cite-${citation.id}`}
                style={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit' }}
            >
                [{citation.id}]
            </Link>
        </sup>
    );
};
export default CitationLink;