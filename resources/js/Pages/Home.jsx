import { useState } from 'react';
import Layout from '../Layouts/Layout';
import { Link,usePage,Head } from '@inertiajs/react';
 function Home ({posts}) {
  const {flash} = usePage().props; 
  const {component} = usePage();

  const [flashmsg, setFlashmsg] = useState(flash.message);
    setTimeout(()=>{
        setFlashmsg(null);
    },2000);
    return (
        <>
         <Head>
            <title>{component}</title></Head>
            <h1 className="title"> Hello </h1>   
            {flashmsg &&  <div className='absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white'>{flashmsg}</div>}
            <div>
                {posts.data.map(post => (
                    <div key ={post.id} className='p-4 border-b'>
                        <div className='text-small'>
                            <span>{new Date(post.created_at).toLocaleTimeString()} {new Date(post.created_at).toLocaleDateString()}</span>
                        </div>
                        <p className='font-medium'>{post.body}</p>
                        <Link href={`/posts/${post.id}`} className='text-link'>View More</Link>
                    </div>
                ))}
            </div>
            <div className='py-12 px-4 text-center'>
                {posts.links.map(link =>(
                    link.url? 
                    <Link preserveScroll key ={link.label} href ={link.url} dangerouslySetInnerHTML={{ __html: link.label }} className={`p-4 mx-1 border ${link.active? "text-blue-500 font-bold":''}`}></Link>
                    :
                    <Link preserveScroll key ={link.label}  dangerouslySetInnerHTML={{ __html: link.label }} className="p-4 mx-1 border text-slate-300"></Link>
                ))}
            </div>
            {/* <Link href="" preserveScroll className='title block mt-[750px]'>{new Date().toLocaleTimeString()}</Link> */}
        </>
    );
}

Home.layout = page => <Layout children={page} title="Welcome" />

export default Home
