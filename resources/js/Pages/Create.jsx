import Layout from '../Layouts/Layout';
// import { Link } from '@inertiajs/react';
import { useForm} from '@inertiajs/react';
 function Create () {
    // console.log(useForm());
    const {data, setData, post, errors, processing} = useForm({
        body:"",
    })
    function submit(e) {
        e.preventDefault();
        post('/posts');
    }
    return (
        <>
            <h1 className="title"> Create a new post </h1>  
            <div>
                <form className='w-1/2 mx-auto' onSubmit={submit}>
                    <textarea rows ="10" value ={data.body} onChange={(e) =>setData('body',e.target.value)} className={errors.body && '!ring-red-500'}></textarea>
                    {errors.body && <p className='error'>{errors.body}</p>}
                    <button className="primary-btn mt-4 " disabled ={processing}>Create Post</button>
                </form>
            </div> 
        </> 
    );
}

Create.layout = page => <Layout children={page} title="Welcome" />

export default Create
