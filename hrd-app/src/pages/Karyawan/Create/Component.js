import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import {
  Button,
  Col,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import { connect } from "react-redux";
import KaryawanValidation from "../../../config/validation/karyawan";
import addNotification from "react-push-notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SelectDepartemen from "./SelectDepartemen";
import SelectJabatan from "./SelectJabatan";
import FileInput from "./UploadFile";

const buttonClick = () => {
  addNotification({
    title: "Berhasil !!!",
    subtitle: "Karyawan ditambahkan",
    message: "Karyawan telah ditambahkan ke daftar karyawan",
    theme: "darkblue",
    native: true,
    duration: 30000, // when using native, your OS will handle theming.
  });
};

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      image: state.karyawan.getKaryawanDetail.image,
      name: state.karyawan.getKaryawanDetail.name,
      nik: state.karyawan.getKaryawanDetail.nik,
      jabatan: state.karyawan.getKaryawanDetail.jabatan,
      departemen: state.karyawan.getKaryawanDetail.departemen,
      tglMulai: state.karyawan.getKaryawanDetail.tglMulai,
      // kontrak: state.karyawan.getKaryawanDetail.kontrak,
      // tglSelesai: state.karyawan.getKaryawanDetail.tglSelesai,
      tempatLahir: state.karyawan.getKaryawanDetail.tempatLahir,
      tglLahir: state.karyawan.getKaryawanDetail.tglLahir,
      gender: state.karyawan.getKaryawanDetail.gender,
      agama: state.karyawan.getKaryawanDetail.agama,
      alamat: state.karyawan.getKaryawanDetail.alamat,
      porto: state.karyawan.getKaryawanDetail.porto,
      cv: state.karyawan.getKaryawanDetail.cv,
    },
  };
};

class FormKaryawan extends Component {
  render() {
    // const { handleSubmit } = this.props
    // console.log("woy", this.props.karyawan.getKaryawanDetail.departemen)
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h5 className="text-muted">Registrasi Data Karyawan</h5>
        <FormGroup row>
          {/* Upload Foto */}
          <Col md={6}>
            <FormGroup row>
              <Label for="image" sm={2} lg={12}>
                Upload Foto :
              </Label>
              <Col md={12}>
                <Field type="file" name="image" component={FileInput} />
                {/* <input  name="image" component="input" type="file" value={null} /> */}
                <FormText color="muted">
                  Foto / Gambar harus memiliki format JPEG,JPG, atau PNG dengan
                  ukuran kurang dari 500 KB.
                </FormText>
              </Col>
            </FormGroup>
          </Col>
          {/* End Upload Foto */}

          {/* Gender */}
          <Col md={6}>
            <FormGroup row>
              <Label for="gender" sm={2} lg={12}>
                Gender :
              </Label>
              <Col md={12}>
                <FormGroup check>
                  <Label check>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="Pria"
                    />{" "}
                    Pria
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="Wanita"
                    />{" "}
                    Wanita
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
          </Col>
          {/* End Gender */}

          {/* Label Nama */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Nama :"
                placeholder="Nama Lengkap"
              />
            </FormGroup>
          </Col>
          {/* End Label Nama */}

          {/* Tanggal Lahir */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="date"
                name="tglLahir"
                component={renderField}
                label="Tanggal Lahir :"
              />
            </FormGroup>
          </Col>
          {/* End Tanggal Lahir */}

          {/* Label NIK */}
          {/* NOTE : NIK ambil dari 3 angka terakhir Object ID */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="number"
                name="nik"
                component={renderField}
                label="NIK : APL."
                placeholder="123"
              />
            </FormGroup>
          </Col>
          {/* End Label NIK */}

          {/* Label NIK */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tempatLahir"
                component={renderField}
                label="Tempat Lahir :"
                placeholder="Yogyakarta, Jakarta, dll..."
              />
            </FormGroup>
          </Col>
          {/* End Label NIK */}

          {/* Label departemen */}
          <Col md={6}>
            <FormGroup row>
              <Label for="departemen" sm={2} lg={12}>
                Departemen :
              </Label>
              <Col md={12}>
                <Field
                  className="form-control"
                  component="select"
                  name="departemen"
                >
                  <SelectDepartemen />
                </Field>
              </Col>
            </FormGroup>
          </Col>
          {/* End Label departemen */}

          {/* Agama */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="agama"
                component={renderField}
                label="Agama :"
              />
            </FormGroup>
          </Col>
          {/* End Agama */}

          {/* Label jabatan */}
          <Col md={6}>
            <FormGroup row>
              <Label for="jabatan" sm={2} lg={12}>
                Jabatan :
              </Label>
              <Col md={12}>
                <Field
                  className="form-control"
                  component="select"
                  name="jabatan"
                >
                  <SelectJabatan />
                </Field>
              </Col>
            </FormGroup>
          </Col>
          {/* End Label jabatan */}

          {/* Tanggal Masuk Karyawan */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="date"
                name="tglMulai"
                component={renderField}
                label="Tanggal Mulai :"
              />
            </FormGroup>
          </Col>
          {/* Tanggal Masuk */}

          {/* Upload CV */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="cv"
                component={renderField}
                label="Upload CV :"
                placeholder="Diisi dengan Link File CV"
              />
              <br />
              <Field
                type="text"
                name="porto"
                component={renderField}
                label="Upload Portofolio :"
                placeholder="Diisi dengan Link File Portofolio"
              />
            </FormGroup>
          </Col>
          {/* End Upload CV */}

          {/* Alamat */}
          <Col md={6}>
            <FormGroup row>
              <Col md={12}>
                <Field
                  type="textarea"
                  name="alamat"
                  component={renderField}
                  label="Alamat Lengkap :"
                  placeholder="Alamat Rumah Karyawan"
                />
              </Col>
            </FormGroup>
          </Col>
          {/* End Alamat */}
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                onClick={buttonClick}
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                <FontAwesomeIcon icon={faPlus} /> Tambah Karyawan
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormKaryawan = reduxForm({
  form: "formTambahKaryawan",
  validate: KaryawanValidation,
  enableReinitialize: true,
})(FormKaryawan);

export default connect(mapStateToProps)(FormKaryawan);
