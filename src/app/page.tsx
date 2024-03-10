"use client"

import { Post } from "./types/Post";
import { useEffect, useState } from "react";


const Page = () => { 
  const [possts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setPosts(json);
  }
  
  return (
    <div className="p-5">
      
      {loading &&
        <div>Carregando, espere...</div>
      }
      
      {!loading && possts.length > 0 &&
        <>
          <div>Total de Posts: {possts.length}</div>
          <div>
            {possts.map((item, index) => (
              <div key={index} className="my-4">
                <h4 className="font-bold">{item.title}</h4>
                <small>#{item.id} - Usuário: {item.userId}</small>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </>
      }
      {!loading && possts.length === 0 &&
        <div>Não ha posts para exibir.</div>
      }

      
    </div>             
  );
}
export default Page;