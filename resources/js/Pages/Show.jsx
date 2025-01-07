import Layout from '../Layouts/Layout';
import { Link, useForm } from '@inertiajs/react';
 function Show ({post}) {
    const {delete :destroy} = useForm();
    function submit(e){
        e.preventDefault()
        destroy(`${post.id}`);
    }
    return (
        <>
                  <div key ={post.id} className='p-4 border-b'>
                        <div className='text-small'>
                            <span>{new Date(post.created_at).toLocaleTimeString()} {new Date(post.created_at).toLocaleDateString()}</span>
                        </div>
                        <p className='font-medium'>{post.body}</p>
                        <form onSubmit={submit}>
                            <button className='bg-red-500 rounded-md text-sm px-4 px-1 text-white'>Delete</button>
                        </form>
                        
                            <Link href={`/posts/${post.id}/edit`} className='bg-green-500 rounded-md text-sm px-4 px-1 text-white'>Edit</Link>
                        
                    </div>
        </> 
    );
}

Show.layout = page => <Layout children={page} title="Welcome" />

export default Show
