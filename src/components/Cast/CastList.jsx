const CastList = ({ actors }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {actors.cast.map(({ profile_path, original_name, character, id }) => (
        <div key={id}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w400/${profile_path}`}
              alt="Movie Actors Cast"
            />
          ) : (
            <img src={defaultImg} alt={original_name} />
          )}
          <li>{original_name}</li>
          <p>Character: {character}</p>
        </div>
      ))}
    </>
  );
};

export default CastList;
