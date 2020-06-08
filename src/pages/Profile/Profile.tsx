import { faCheck, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Footer } from "src/pages/components/Footer";
import { firestore, storage } from "src/setup/firebase";
import "./styles.scss";

const Profile = () => {
  const { profile, auth }: { profile: any; auth: any } = useSelector(
    (state: any) => state.firebase
  );
  const [avatarURI, setAvatarURI] = React.useState("");
  const [file, setFile] = React.useState<{
    preview: string;
    raw?: File;
  }>();
  const windowWidth = useWindowWidth();

  const fileUploadHandler = () => {
    if (file && file.raw) {
      // Points to the root reference
      const storageRef = storage.ref();

      // Points to 'avatars'
      const avatarsRef = storageRef.child("avatars");

      // Points to 'avatars/fileName'
      const fileType =
        file.raw.type === "image/jpeg"
          ? "jpg"
          : file.raw.type === "image/png"
          ? "png"
          : "not-supported";
      const fileName = `${auth.uid}.${fileType}`;

      const profilePictureRef = avatarsRef.child(fileName);

      // File path is 'avatars/fileName'
      const path = profilePictureRef.fullPath;

      // File name is 'fileNamg'
      // const name = profilePictureRef.name;

      // console.log({ path, name });

      if (fileType === "not-supported") {
        console.log("File type is not supported.");
      } else {
        // use the Blob or File API
        profilePictureRef
          .put(file.raw)
          .then(snapshot => {
            console.log("Picture Uploaded!");
            getAvatar(auth.uid);
          })
          .then(() => {
            updatePhotoURL(path);
            setFile({ preview: "" });
          })
          .catch(error => {
            console.log("Something went wrong...");
          });
      }
    }
  };

  const getAvatar = (userId: string) => {
    // Points to the root reference
    const storageRef = storage.ref();

    // Create a reference with an initial file path and name
    const pathReference = storage.ref(`avatars/${userId}.jpg`);

    storageRef
      .child(pathReference.fullPath)
      .getDownloadURL()
      .then(url => {
        // console.log(url);
        setAvatarURI(url);
      })
      .catch(error => {
        // Handle any errors
        setAvatarURI("no-avatar");
        // console.log(error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        setFile({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const updatePhotoURL = (value: string) => {
    firestore
      .collection("users")
      .doc(auth.uid)
      .update({
        photoURL: value
      });
  };

  React.useEffect(() => {
    if (profile.photoURL === null) {
      setAvatarURI("no-avatar");
    } else if (profile.photoURL.includes("avatars")) {
      getAvatar(auth.uid);
    } else {
      setAvatarURI(profile.photoURL);
    }

    return () => {
      setAvatarURI("");
    };
  }, [profile.photoURL, auth.uid]);

  return (
    <>
      {/* 56px for navbar, 30px for card top margin, 100px for footer */}
      <Container style={{ height: "calc(100vh - 56px - 30px - 100px)" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            margin: "30px auto",
            padding: "50px",
            width:
              windowWidth <= 550 ? "100%" : windowWidth <= 991 ? "70%" : "50%",
            boxShadow: "0px 0px 15px 5px rgba(142, 142, 142, 0.3)"
          }}
        >
          <Row xs={1}>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0"
              }}
            >
              {avatarURI ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: "5px",
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)"
                  }}
                >
                  <Form.File
                    id="formcheck-api-regular"
                    style={{ position: "relative" }}
                  >
                    <Form.File.Label style={{ margin: 0 }}>
                      {avatarURI === "no-avatar" && !file?.preview ? (
                        <FontAwesomeIcon
                          style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            minWidth: "100px",
                            minHeight: "100px",
                            fontSize: "1.3em",
                            fontStyle: "bold",
                            color: "#A0CE54",
                            padding: "15px"
                          }}
                          icon={faUser}
                        />
                      ) : (
                        <Image
                          style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            minWidth: "100px",
                            minHeight: "100px",
                            background: `url(${
                              file?.preview ? file?.preview : avatarURI
                            }) no-repeat center / cover`,
                            borderRadius: "50%",
                            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)"
                          }}
                        />
                      )}
                    </Form.File.Label>
                    <Form.File.Input
                      style={{ display: "none " }}
                      onChange={handleChange}
                    />
                    {file?.preview && (
                      <>
                        <Button
                          className="btn-success"
                          type="submit"
                          value="Upload Image"
                          onClick={fileUploadHandler}
                          style={{ position: "absolute", right: "90px" }}
                        >
                          <FontAwesomeIcon
                            style={{ minWidth: "16px" }}
                            icon={faCheck}
                          />
                        </Button>
                        <Button
                          className="btn-danger"
                          type="submit"
                          value="Cancel"
                          onClick={() => {
                            setFile({ preview: "" });
                          }}
                          style={{ position: "absolute", left: "90px" }}
                        >
                          <FontAwesomeIcon
                            style={{ minWidth: "16px" }}
                            icon={faTimes}
                          />
                        </Button>
                      </>
                    )}
                  </Form.File>
                </div>
              ) : (
                <div
                  style={{
                    minHeight: "100px",
                    minWidth: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "5px"
                  }}
                  className="sweet-loading"
                >
                  <ClipLoader color={"#A0CE54"} />
                </div>
              )}
            </Col>
          </Row>

          <Row xs={1}>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0"
              }}
            >
              Name: {profile.displayName}
            </Col>
          </Row>

          <Row xs={1}>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0"
              }}
            >
              Email: {profile.email}
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export { Profile };
