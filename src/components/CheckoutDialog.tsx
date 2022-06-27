import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Box,
    TextField,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    Link,
  } from "@mui/material";
  import React, { useState } from "react";
  import "./styles/CheckoutDialog.scss";
  import { useNavigate } from "react-router-dom";
  import { useForm, Controller } from "react-hook-form";
import { useQuery } from "react-query";
import SignatureCanvas from 'react-signature-canvas'
  
  function CheckoutDialog(props: any) { 
    const {
      open,
      handleClose,
      finishTransaction,
      instrument,
      userID,
    } = props;
    const apiUrlAll = `http://localhost:8080/user/${userID}`;
  
    let sigPad: any = {}
  
    const clear = () => {
      sigPad.clear()
    }

    const {isLoadingUser, isError, data: user} : any = useQuery("User", () =>
        fetch(apiUrlAll).then((res) => res.json())
    );
    console.log(user);
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [error, setError] = useState({ isError: false, msg: "No Error" });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [cardId, setCardId] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardPin, setCardPin] = useState("");
    const [agree, setAgree] = useState(false);
    const apiUrlBlockSeat = `http://localhost:8080/booking/add`;
    const {
      setValue,
      handleSubmit,
      formState: { errors },
      control,
    } = useForm();
  
    const handleRadioChange = (e: any) => {
      setPaymentMethod(e.target.value);
    };
  
    const blockSeat = async () => {
  
      const today : Date = new Date();
      let returnDate : Date = new Date();
      returnDate.setDate(returnDate.getDate() + 30);
      let success: boolean = false;
      setIsLoading(true);
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userID: userID,
          instrumentID: instrument.id,
          apprxReturnDate: today.toISOString().substring(0, 10),
          bookingDate: returnDate.toISOString().substring(0, 10),
          signatureCode: sigPad.getTrimmedCanvas().toDataURL('image/png').replace("data:image/png;base64,", "")
        }),
      };
      const response = await fetch(apiUrlBlockSeat, requestOptions);
      if (!response.ok) {
        setError({ isError: true, msg: `Fehler: ${response.statusText}` });
      } else if (response.ok) {
        setError({ isError: false, msg: "No error" });
        success = true;
      }
      setIsLoading(false);
      if (success) {
        finishTransaction();
      }
    };
  
    function redirectToTerms() {
      navigate("/AGBs");
    }
  
    function checkboxHandler() {
      setAgree(!agree);
    }

    return (
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth={true}
          maxWidth="sm"
          style={{
            color: "rgba(5,10,15,255)"
          }}
          PaperProps={{
            style: {
              backgroundColor: "rgba(14,20,32,255)",
              boxShadow: "none"
            },
          }}
        >
          <DialogTitle id="scroll-dialog-title" className="text">
            Checkout: {instrument.title} ({instrument.category})
          </DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText id="scroll-dialog-description">
              {isLoading ? <></> : null}
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <RadioGroup
                      color="secondary"
                      aria-label="paymentMethod"
                      defaultValue="creditCard"
                      onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      color="secondary"
                      value="creditCard"
                      control={<Radio />}
                      label="Kreditkarte"
                    />
                    <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label="Paypal"
                    />
                    <FormControlLabel
                      value="instantBankTransfer"
                      control={<Radio />}
                      label="Sofortüberweisung"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={1}>
                  <div className="lineOfDivision" />
                </Grid>
                <Grid item xs={6}>
                  <FormControl className="marginTop1Rem" component="fieldset">
                      {paymentMethod === "creditCard" ? (
                        <div>
                          <Controller
                            name="cardIdInput"
                            control={control}
                            rules={{
                              required: true,
                              minLength: 16,
                              maxLength: 16,
                              pattern:
                                /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i,
                            }}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                required
                                margin="normal"
                                autoFocus
                                error={errors.cardIdInput}
                                value={cardId}
                                onChange={(e: any) => {
                                  setCardId(e.target.value);
                                  setValue("cardIdInput", e.target.value);
                                  return;
                                }}
                                fullWidth
                                label="Kartennummer"
                                variant="standard"
                              />
                            )}
                          />
                          <Controller
                            name="cardName"
                            control={control}
                            rules={{
                              required: true,
                              minLength: 3,
                            }}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                required
                                margin="normal"
                                autoFocus
                                error={errors.cardName}
                                value={cardName}
                                onChange={(e: any) => {
                                  setCardName(e.target.value);
                                  setValue("cardName", e.target.value);
                                  return;
                                }}
                                fullWidth
                                label="Name des Karteninhabers"
                                variant="standard"
                              />
                            )}
                          />
                          <Controller
                            name="cardExpiry"
                            control={control}
                            rules={{
                              required: true,
                              minLength: 5,
                              maxLength: 5,
                              pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                            }}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                required
                                margin="normal"
                                autoFocus
                                error={errors.cardExpiry}
                                value={cardExpiry}
                                onChange={(e: any) => {
                                  setCardExpiry(e.target.value);
                                  setValue("cardExpiry", e.target.value);
                                  return;
                                }}
                                label="Gültig bis (MM/JJ)"
                                variant="standard"
                              />
                            )}
                          />
                          <Controller
                            name="cardPin"
                            control={control}
                            rules={{
                              required: true,
                              minLength: 3,
                              maxLength: 3,
                              pattern: /[0-9]+/i,
                            }}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                required
                                margin="normal"
                                autoFocus
                                error={errors.cardPin}
                                value={cardPin}
                                onChange={(e: any) => {
                                  setCardPin(e.target.value);
                                  setValue("cardPin", e.target.value);
                                  return;
                                }}
                                label="Sicherheitscode"
                                variant="standard"
                              />
                            )}
                          />
                        </div>
                      ) : null}
                      {paymentMethod === "paypal" ? (
                        <p>
                          Sie werden während des Checkouts zu Paypal
                          weitergeleitet.
                        </p>
                      ) : null}
                      {paymentMethod === "instantBankTransfer" ? (
                        <p>
                          Sie werden während des Checkouts zu Klarna
                          weitergeleitet.
                        </p>
                      ) : null}
  
                    <label htmlFor="agree" style={{color: "white"}}>
                      <input
                        type="checkbox"
                        id="agree"
                        onChange={checkboxHandler}
                        style={{color: "#9f20d1"}}
                      />{" "}
                      Ich akzeptiere die{" "}
                      <Link onClick={redirectToTerms} style={{color: "#9f20d1"}}>AGBs</Link>.{" "}
                    </label>
                    <br></br>
                  </FormControl>
                      <br></br>
                      <strong style={{color: "white"}}>Unterschrift</strong> 
                  <SignatureCanvas penColor='purple' backgroundColor="white" canvasProps={{width: "200%", height: "100%", className: 'sigCanvas'}}
                    ref={(ref) => { sigPad = ref }}
                  /><br></br>
                  <Button color="secondary" onClick={() => {
                    clear();
                  }}>Unterschrift zurücksetzen</Button>
                </Grid>
              </Grid>
              {error.isError ? (
                <small style={{ color: "red" }}>
                  Ein Fehler ist aufgetreten. Bitte überprüfen Sie ihre Eingaben.
                  Bei technischen Problemen wenden Sie sich bitte an den Admin
                  dieser Website. {error.msg}
                </small>
              ) : null}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleClose}>Abbruch</Button>
            <Button color="secondary" disabled={!agree} onClick={handleSubmit(blockSeat)}>
              Bezahlen
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
  
  export default CheckoutDialog;