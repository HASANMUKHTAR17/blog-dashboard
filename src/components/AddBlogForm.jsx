import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../blogSlice";

function AddBlogForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: "", category: "React", author: "", readingTime: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.title || !form.author || !form.readingTime) return;
    dispatch(addBlog({
      id: Date.now(),
      title: form.title,
      category: form.category,
      author: form.author,
      readingTime: Number(form.readingTime),
      featured: false,
    }));
    setForm({ title: "", category: "React", author: "", readingTime: "" });
  }

  return (
    <div className="add-form">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input name="readingTime" type="number" placeholder="Minutes" value={form.readingTime} onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        <option>React</option>
        <option>Redux</option>
        <option>Node</option>
      </select>
      <button onClick={handleSubmit}>Add Blog</button>
    </div>
  );
}
export default AddBlogForm;