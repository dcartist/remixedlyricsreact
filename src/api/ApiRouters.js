import { useState, useEffect } from 'react';
import axios from 'axios';


const AllCategoryApi = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
            setCategories(response.data);
        }
        fetchCategories();
    }, []);

    return categories;
}


const AllSongsApi = () => {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const fetchSongs = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/songs`);
            setSongs(response.data);
        }
        fetchSongs();
    }, []);

    return songs;
}


const GetSongById = (songId) => {  
    const [song, setSong] = useState([]);
    useEffect(() => {
        const fetchSong = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/songs/${songId}`);
            setSong(response.data);
        }
        fetchSong();
    }, [songId]);

    return song;
}


export  {AllCategoryApi, AllSongsApi, GetSongById};