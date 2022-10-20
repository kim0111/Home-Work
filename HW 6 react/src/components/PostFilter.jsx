import React from 'react';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <select value={filter.sort} onChange={(e) => setFilter({...filter, sort: e.target.value})} name="" id="">
                <option value="title">По имени</option>
                <option value="body">По описанию</option>
            </select>
            <input type="text" placeholder="Поиск" value={filter.query} onChange={(e) => setFilter({...filter, query: e.target.value})}/>
        </div>
    );
};

export default PostFilter;