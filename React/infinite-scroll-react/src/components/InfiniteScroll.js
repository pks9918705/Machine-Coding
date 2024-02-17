import React, { useState, useEffect, useRef } from 'react';

function InfiniteScroll() {
    const [posts, setPosts] = useState([]);
    // const [pageNumber, setPageNumber] = useState(1);
    const pageNumber=useRef(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef();

    useEffect(() => {

        console.log('Use effect k andar aa gaya');

        const fetchData = async () => {
            setLoading(true);

      console.log('fetching....');
      

            try {
                console.log('Enterd in try catch block..');

                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber.current}`);
                const data = await response.json();
                setPosts(prevPosts => [...prevPosts, ...data]);
                pageNumber.current+=1;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        observer.current = new IntersectionObserver((entries) => {
            console.log('Obeserver is setted...');

            if (entries[0].isIntersecting) {
                fetchData();
            }
        }, { threshold: 0.5 }); // Intersection observed when 50% of the target is visible

        if (observer.current) {
            console.log('observer.current');

            observer.current.observe(document.querySelector('.trigger'));
        }

        // Cleanup: Stop observing when component unmounts
        return () => {
            if (observer.current) {
                console.log('cleanuo...');

                observer.current.disconnect();
            }
        };
    }, [pageNumber]);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
            <div className="trigger" style={{ height: '10px' }}></div>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default InfiniteScroll;
