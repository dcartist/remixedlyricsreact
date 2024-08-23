import { useState, useEffect } from 'react';
import axios from 'axios';

// list all categories
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

//List all songs
const AllSongsApi = () => {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const fetchSongs = async () => {
            const songsresponse = await axios.get(`${process.env.REACT_APP_API_URL}/songs/`);
            setSongs(songsresponse.data);
        }
        fetchSongs();
    }, []);

    return songs;
}

// Grab song by id
const GetSongById = (songId) => {  
    const [song, setSong] = useState([]);
    useEffect(() => {
        const fetchSong = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/songs/${songId}/`);
            setSong(response.data);
        }
        fetchSong();
    }, [songId]);

    return song;
}


export {AllSongsApi, AllCategoryApi, GetSongById};