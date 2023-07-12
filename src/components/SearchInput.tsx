import SearchIcon from '@mui/icons-material/Search';
export const SearchInput = () => {
  return (
    <>
      <div className={'flex justify-end items-center relative w-5/6 mx-auto pt-4'}>
        <input type="text" placeholder="Type here" className="input bg-white input-bordered w-full max-w-xs" />
        <SearchIcon className={'absolute mr-2 w-10'} />
      </div>
    </>
  );
};
