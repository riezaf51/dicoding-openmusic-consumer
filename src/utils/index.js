/* eslint-disable camelcase */

const mapDBToLiteSongModel = ({
    id,
    title,
    performer,
}) => ({
    id,
    title,
    performer,
});

const mapDBToPlaylistModel = ({
    id,
    name,
    songs,
}) => ({
    id,
    name,
    songs,
});

const mapDBToPlaylistWithSongsModel = (playlistWithSongsData) => {
    const { playlist } = playlistWithSongsData[0];
    const songs = playlistWithSongsData
        .filter((row) => row.song)
        .map((row) => mapDBToLiteSongModel(row.song));

    playlist.songs = songs;
    return mapDBToPlaylistModel(playlist);
};

module.exports = {
    mapDBToLiteSongModel,
    mapDBToPlaylistModel,
    mapDBToPlaylistWithSongsModel,
};
