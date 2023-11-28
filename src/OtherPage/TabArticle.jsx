import React from 'react';
import AllArticleOne from './AllArticleOne';

const TabArticle = ({items}) => {
    return (
        <div>
            {
                items.map(item => <AllArticleOne
                    key={item.NewsTitle}
                    item={item}
                ></AllArticleOne>)
            }
        </div>
    );
};

export default TabArticle;