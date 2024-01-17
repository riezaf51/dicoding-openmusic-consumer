const { Pool } = require('pg');
const { mapDBToPlaylistWithSongsModel } = require('./utils');

class PlaylistsService {
    constructor() {
        this._pool = new Pool();
    }

    async getPlaylistWithMusics(playlistId) {
        const query = {
            text: 'SELECT to_json(playlists) AS playlist, to_json(songs) AS song FROM playlists LEFT JOIN playlist_songs ON playlists.id = playlist_songs.playlist_id LEFT JOIN songs ON songs.id = playlist_songs.song_id WHERE playlist_songs.playlist_id = $1',
            values: [playlistId],
        };

        const result = await this._pool.query(query);

        return {
            playlist: mapDBToPlaylistWithSongsModel(result.rows),
        };
    }
}

module.exports = PlaylistsService;
