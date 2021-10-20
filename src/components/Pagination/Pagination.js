import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const PaginationBasic = () => {
    const { pages, filterPerPage, filter } = useContext(AppContext);
    const [filterPage, setFilterPage] = useState(filter);

    let items = [];

    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => filterPerPage(number, filterPage)}>
                {number}
            </Pagination.Item>,
        );
    }
    return <PaginationList>{items}</PaginationList>;
};

const PaginationList = styled(Pagination)`
    justify-content: flex-end;
    margin-bottom: -3rem;
    margin-top: 2rem;
`;

export default PaginationBasic;
