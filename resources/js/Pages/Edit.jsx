import Layout from '../Layouts/Layout';
// import { Link } from '@inertiajs/react';
import { useForm} from '@inertiajs/react';
 function Create ({post}) {
    const {data, setData, put, errors, processing} = useForm({
        body: post.body,
    })
    function submit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }
    return (
        <>
            <h1 className="title"> Edit a post </h1>  
            <div>
                <form className='w-1/2 mx-auto' onSubmit={submit}>
                    <textarea rows ="10" value ={data.body} onChange={(e) =>setData('body',e.target.value)} className={errors.body && '!ring-red-500'}></textarea>
                    {errors.body && <p className='error'>{errors.body}</p>}
                    <button className="primary-btn mt-4 " disabled ={processing}>Update Post</button>
                </form>
            </div> 
        </> 
    );
}

Create.layout = page => <Layout children={page} title="Welcome" />

export default Create
