import React, { useEffect } from "react";
import styled from "styled-components";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { closeAdminModal } from "../Redux-toolkit/slice/adminModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import { FETCH_ALL_TRACKS } from "../Redux-toolkit/types/trackType";
import {
  closeEditModal,
  openEditModal,
} from "../Redux-toolkit/slice/editModal";
import {
  openDeleteModal,
  closeDeleteModal,
} from "../Redux-toolkit/slice/deleteModal";
import EditModal from "../Components/EditModal";
import {
  setTrackForEdit,
  setTrackForDelete,
} from "../Redux-toolkit/slice/trackSlice";
import DeleteModal from "../Components/DeleteModal";

const AllTracksContainer = styled.div`
  font-family: "Arial", sans-serif;
  width: 100vw;
  height: 100vh;
  background: #111111;
  position: relative;
`;
const AllTracksWrapper = styled.div`
  padding: 80px 100px 0px 100px;
`;
const AllTrackTable = styled.div`
  height: calc(100vh - 80px);
  width: calc(100vw - 200px);
`;
const AllTrackFirstRowContainer = styled.div`
  height: 5vh;
  margin-bottom: 30px;
  background-color: #333333;
`;
const AllTrackFirstRow = styled.div`
  height: 100%;
  width: 100%;
`;
const AllTrackColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
const AllTrackColumn = styled.div`
  border: 2px solid white;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const AllTrackColumnImageText = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: white;
  padding-left: 25px;
`;
const AllTrackColumnText = styled.p`
  margin: 0px;
  padding: 0px;
  padding-left: 25px;
  font-size: 28px;
  font-weight: 700;
  color: white;
`;
//style for the data row and its components begins here
const AllTrackDataRowContainer = styled.div`
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
const AllTrackDataRow = styled.div`
  height: 15vh;
  width: 100%;
  margin-bottom: 15px;
`;
const AllTrackDataRowColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const AllTrackDataRowColumn = styled.div`
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  border-top: 2px solid white;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "left"};
  align-items: center;
  background-color: #333333;
`;
const AllTrackDataRowImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const AllTrackDataRowText = styled.p`
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
    border-radius: 50px;
  }
`;

const AllTracksPage = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const imageUrl = PF + "images/";

  console.log("all Track page");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackClick = () => {
    dispatch(closeAdminModal());
    navigate("/maindisplay");
  };
  useEffect(() => {
    dispatch({ type: FETCH_ALL_TRACKS });
    dispatch(closeEditModal());
    dispatch(closeDeleteModal());
  }, []);

  const { allTrack } = useSelector((state) => state.track);
  const { editModalOpen } = useSelector((state) => state.editModal);
  const { isOpenDeleteModal } = useSelector((state) => state.deleteModal);

  const handleEditTrack = (id) => {
    dispatch(openEditModal());
    dispatch(setTrackForEdit(id));
  };
  const handleDeleteClick = (id) => {
    dispatch(openDeleteModal());
    dispatch(setTrackForDelete(id));
  };
  return (
    <AllTracksContainer>
      {editModalOpen && <EditModal />}
      {isOpenDeleteModal && <DeleteModal />}
      <AllTracksWrapper>
        <AllTrackTable>
          <AllTrackFirstRowContainer>
            <AllTrackFirstRow>
              <AllTrackColumnContainer>
                <AllTrackColumn style={{ width: "10%" }}>
                  <AllTrackColumnImageText>Image</AllTrackColumnImageText>
                </AllTrackColumn>
                <AllTrackColumn style={{ width: "30%" }}>
                  <AllTrackColumnText>Track Name</AllTrackColumnText>
                </AllTrackColumn>
                <AllTrackColumn style={{ width: "20%" }}>
                  <AllTrackColumnText>Artist Name</AllTrackColumnText>
                </AllTrackColumn>
                <AllTrackColumn style={{ width: "20%" }}>
                  <AllTrackColumnText>Genre</AllTrackColumnText>
                </AllTrackColumn>
                <AllTrackColumn style={{ width: "10%" }}>
                  <AllTrackColumnText>Edit</AllTrackColumnText>
                </AllTrackColumn>
                <AllTrackColumn style={{ width: "10%" }}>
                  <AllTrackColumnText>Delete</AllTrackColumnText>
                </AllTrackColumn>
              </AllTrackColumnContainer>
            </AllTrackFirstRow>
          </AllTrackFirstRowContainer>
          <AllTrackDataRowContainer>
            {allTrack.map((track) => (
              <AllTrackDataRow key={track._id}>
                <AllTrackDataRowColumnContainer>
                  <AllTrackDataRowColumn style={{ width: "10%" }}>
                    <AllTrackDataRowImage
                      src={`${imageUrl}${track.imageurl}`}
                    />
                  </AllTrackDataRowColumn>
                  <AllTrackDataRowColumn style={{ width: "30%" }}>
                    <AllTrackDataRowText>{track.title}</AllTrackDataRowText>
                  </AllTrackDataRowColumn>
                  <AllTrackDataRowColumn style={{ width: "20%" }}>
                    <AllTrackDataRowText>{track.artist}</AllTrackDataRowText>
                  </AllTrackDataRowColumn>
                  <AllTrackDataRowColumn style={{ width: "20%" }}>
                    <AllTrackDataRowText>{track.genre}</AllTrackDataRowText>
                  </AllTrackDataRowColumn>
                  <AllTrackDataRowColumn
                    style={{ width: "10%" }}
                    justifyContent="center"
                    onClick={() => handleEditTrack(track._id)}
                  >
                    <AllTrackDataRowText>
                      <EditNoteIcon
                        style={{
                          color: "#0074D9",
                          fontSize: "38px",
                        }}
                      />
                    </AllTrackDataRowText>
                  </AllTrackDataRowColumn>
                  <AllTrackDataRowColumn
                    style={{ width: "10%" }}
                    justifyContent="center"
                    onClick={() => handleDeleteClick(track._id)}
                  >
                    <AllTrackDataRowText>
                      <DeleteForeverIcon
                        style={{
                          color: "#FF0000 ",
                          fontSize: "38px",
                        }}
                      />
                    </AllTrackDataRowText>
                  </AllTrackDataRowColumn>
                </AllTrackDataRowColumnContainer>
              </AllTrackDataRow>
            ))}
          </AllTrackDataRowContainer>
        </AllTrackTable>
      </AllTracksWrapper>
      <BackButton onClick={handleBackClick}>
        <WestIcon />
      </BackButton>
    </AllTracksContainer>
  );
};

export default AllTracksPage;
