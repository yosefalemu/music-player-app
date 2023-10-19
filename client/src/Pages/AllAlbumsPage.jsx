import React, { useEffect } from "react";
import styled from "styled-components";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { closeAdminModal } from "../Redux-toolkit/slice/adminModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import { FETCH_ALL_ALBUM } from "../Redux-toolkit/types/albumType";
import EditAlbumModal from "../Components/EditAlbum";
import { openEditAlbumModal } from "../Redux-toolkit/slice/editAlbumModal";
import { setAlbumForEdit } from "../Redux-toolkit/slice/albumSlice";
import { setAlbumForDelete } from "../Redux-toolkit/slice/albumSlice";
import { closeEditAlbumModal } from "../Redux-toolkit/slice/editAlbumModal";
import DeleteAlbumModal from "../Components/DeleteAlbumModal";
import { openDeleteAlbumModal } from "../Redux-toolkit/slice/deleteAlbumModal";
import { closeDeleteAlbumModal } from "../Redux-toolkit/slice/deleteAlbumModal";

const AllAlbumsContainer = styled.div`
  font-family: "Arial", sans-serif;
  width: 100vw;
  height: 100vh;
  background: #111111;
  position: relative;
`;
const AllAlbumsWrapper = styled.div`
  padding: 80px 100px 0px 100px;
`;
const AllAlbumTable = styled.div`
  height: calc(100vh - 80px);
  width: calc(100vw - 200px);
`;
const AllAlbumFirstRowContainer = styled.div`
  height: 7vh;
  margin-bottom: 30px;
  background-color: #333333;
`;
const AllAlbumFirstRow = styled.div`
  height: 100%;
  width: 100%;
`;
const AllAlbumColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
const AllAlbumColumn = styled.div`
  border: 2px solid white;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const AllAlbumColumnImageText = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: white;
  padding-left: 25px;
`;
const AllAlbumColumnText = styled.p`
  margin: 0px;
  padding: 0px;
  padding-left: 25px;
  font-size: 28px;
  font-weight: 700;
  color: white;
`;
//style for the data row and its components begins here
const AllAlbumDataRowContainer = styled.div`
  max-height: calc(90vh - 80px);
  width: calc(100vw - 200px);
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: gray #f1f1f1;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 5px;
  }
`;
const AllAlbumDataRow = styled.div`
  height: 15vh;
  width: 100%;
  margin-bottom: 15px;
`;
const AllAlbumDataRowColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const AllAlbumDataRowColumn = styled.div`
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  border-top: 2px solid white;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "left"};
  align-items: center;
  background-color: #333333;
`;
const AllAlbumDataRowImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const AllAlbumDataRowText = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 18px;
  margin-left: 10px;
  color: white;
`;
const BackButton = styled.button`
  font-size: 18px;
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 11px 33px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #20c997;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    border-radius: 100px;
  }
`;

const AllAlbumsPage = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log("all album page");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageUrl = PF + "images/";

  useEffect(() => {
    dispatch({ type: FETCH_ALL_ALBUM });
    dispatch(closeEditAlbumModal());
    dispatch(closeDeleteAlbumModal());
  }, [dispatch]);

  const { albums } = useSelector((state) => state.album);
  const { editAlbumModalOpen } = useSelector((state) => state.editAlbumModal);
  const { isOpenDeleteAlbumModal } = useSelector(
    (state) => state.deleteAlbumModal
  );

  const handleEditAlbum = (id) => {
    dispatch(openEditAlbumModal());
    dispatch(setAlbumForEdit(id));
  };

  const handleDeleteAlbum = (id) => {
    dispatch(openDeleteAlbumModal());
    dispatch(setAlbumForDelete(id));
  };

  const handleBackClick = () => {
    dispatch(closeAdminModal());
    navigate("/maindisplay");
  };
  return (
    <AllAlbumsContainer>
      {editAlbumModalOpen && <EditAlbumModal />}
      {isOpenDeleteAlbumModal && <DeleteAlbumModal />}
      <AllAlbumsWrapper>
        <AllAlbumTable>
          <AllAlbumFirstRowContainer>
            <AllAlbumFirstRow>
              <AllAlbumColumnContainer>
                <AllAlbumColumn style={{ width: "10%" }}>
                  <AllAlbumColumnImageText>Image</AllAlbumColumnImageText>
                </AllAlbumColumn>
                <AllAlbumColumn style={{ width: "30%" }}>
                  <AllAlbumColumnText>Album Name</AllAlbumColumnText>
                </AllAlbumColumn>
                <AllAlbumColumn style={{ width: "20%" }}>
                  <AllAlbumColumnText>Artist Name</AllAlbumColumnText>
                </AllAlbumColumn>
                <AllAlbumColumn style={{ width: "20%" }}>
                  <AllAlbumColumnText>Genre</AllAlbumColumnText>
                </AllAlbumColumn>
                <AllAlbumColumn style={{ width: "10%" }}>
                  <AllAlbumColumnText>Edit</AllAlbumColumnText>
                </AllAlbumColumn>
                <AllAlbumColumn style={{ width: "10%" }}>
                  <AllAlbumColumnText>Delete</AllAlbumColumnText>
                </AllAlbumColumn>
              </AllAlbumColumnContainer>
            </AllAlbumFirstRow>
          </AllAlbumFirstRowContainer>
          <AllAlbumDataRowContainer>
            {albums.map((album) => (
              <AllAlbumDataRow key={album}>
                <AllAlbumDataRowColumnContainer>
                  <AllAlbumDataRowColumn style={{ width: "10%" }}>
                    <AllAlbumDataRowImage
                      src={`${imageUrl}${album.albumImageUrl}`}
                    />
                  </AllAlbumDataRowColumn>
                  <AllAlbumDataRowColumn style={{ width: "30%" }}>
                    <AllAlbumDataRowText>{album.title}</AllAlbumDataRowText>
                  </AllAlbumDataRowColumn>
                  <AllAlbumDataRowColumn style={{ width: "20%" }}>
                    <AllAlbumDataRowText>{album.artist}</AllAlbumDataRowText>
                  </AllAlbumDataRowColumn>
                  <AllAlbumDataRowColumn style={{ width: "20%" }}>
                    <AllAlbumDataRowText>{album.genre}</AllAlbumDataRowText>
                  </AllAlbumDataRowColumn>
                  <AllAlbumDataRowColumn
                    style={{ width: "10%" }}
                    justifyContent="center"
                    onClick={() => handleEditAlbum(album._id)}
                  >
                    <AllAlbumDataRowText>
                      <EditNoteIcon
                        style={{ color: "yellow", fontSize: "38px" }}
                      />
                    </AllAlbumDataRowText>
                  </AllAlbumDataRowColumn>
                  <AllAlbumDataRowColumn
                    style={{ width: "10%" }}
                    justifyContent="center"
                    onClick={() => handleDeleteAlbum(album._id)}
                  >
                    <AllAlbumDataRowText>
                      <DeleteForeverIcon
                        style={{
                          color: "red",
                          fontSize: "38px",
                        }}
                      />
                    </AllAlbumDataRowText>
                  </AllAlbumDataRowColumn>
                </AllAlbumDataRowColumnContainer>
              </AllAlbumDataRow>
            ))}
          </AllAlbumDataRowContainer>
        </AllAlbumTable>
      </AllAlbumsWrapper>
      <BackButton onClick={handleBackClick}>
        <WestIcon />
      </BackButton>
    </AllAlbumsContainer>
  );
};

export default AllAlbumsPage;
