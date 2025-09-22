"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Mail,
  CheckCircle,
  Search,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLanguage } from "../contexts/LanguageContext";
import OpeningStatus from "./OpeningStatus";

const Reservations = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const operatingHours = [
    {
      day: t("reservations.hours.days.monday"),
      hours: "Closed",
      isOpen: false,
    },
    {
      day: t("reservations.hours.days.tuesday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.wednesday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.thursday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.friday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.saturday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
    {
      day: t("reservations.hours.days.sunday"),
      hours: t("reservations.hours.time"),
      isOpen: true,
    },
  ];

  const timeSlots = [
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];

  const countryCodes = [
    { code: "+93", country: "AF", flag: "🇦🇫", name: "Afghanistan" },
    { code: "+355", country: "AL", flag: "🇦🇱", name: "Albania" },
    { code: "+213", country: "DZ", flag: "🇩🇿", name: "Algeria" },
    { code: "+1684", country: "AS", flag: "🇦🇸", name: "American Samoa" },
    { code: "+376", country: "AD", flag: "🇦🇩", name: "Andorra" },
    { code: "+244", country: "AO", flag: "🇦🇴", name: "Angola" },
    { code: "+1264", country: "AI", flag: "🇦🇮", name: "Anguilla" },
    { code: "+1268", country: "AG", flag: "🇦🇬", name: "Antigua and Barbuda" },
    { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
    { code: "+374", country: "AM", flag: "🇦🇲", name: "Armenia" },
    { code: "+297", country: "AW", flag: "🇦🇼", name: "Aruba" },
    { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
    { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria" },
    { code: "+994", country: "AZ", flag: "🇦🇿", name: "Azerbaijan" },
    { code: "+1242", country: "BS", flag: "🇧🇸", name: "Bahamas" },
    { code: "+973", country: "BH", flag: "🇧🇭", name: "Bahrain" },
    { code: "+880", country: "BD", flag: "🇧🇩", name: "Bangladesh" },
    { code: "+1246", country: "BB", flag: "🇧🇧", name: "Barbados" },
    { code: "+375", country: "BY", flag: "🇧🇾", name: "Belarus" },
    { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium" },
    { code: "+501", country: "BZ", flag: "🇧🇿", name: "Belize" },
    { code: "+229", country: "BJ", flag: "🇧🇯", name: "Benin" },
    { code: "+1441", country: "BM", flag: "🇧🇲", name: "Bermuda" },
    { code: "+975", country: "BT", flag: "🇧🇹", name: "Bhutan" },
    { code: "+591", country: "BO", flag: "🇧🇴", name: "Bolivia" },
    { code: "+387", country: "BA", flag: "🇧🇦", name: "Bosnia and Herzegovina" },
    { code: "+267", country: "BW", flag: "🇧🇼", name: "Botswana" },
    { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
    {
      code: "+246",
      country: "IO",
      flag: "🇮🇴",
      name: "British Indian Ocean Territory",
    },
    { code: "+673", country: "BN", flag: "🇧🇳", name: "Brunei" },
    { code: "+359", country: "BG", flag: "🇧🇬", name: "Bulgaria" },
    { code: "+226", country: "BF", flag: "🇧🇫", name: "Burkina Faso" },
    { code: "+257", country: "BI", flag: "🇧🇮", name: "Burundi" },
    { code: "+855", country: "KH", flag: "🇰🇭", name: "Cambodia" },
    { code: "+237", country: "CM", flag: "🇨🇲", name: "Cameroon" },
    { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
    { code: "+238", country: "CV", flag: "🇨🇻", name: "Cape Verde" },
    { code: "+1345", country: "KY", flag: "🇰🇾", name: "Cayman Islands" },
    {
      code: "+236",
      country: "CF",
      flag: "🇨🇫",
      name: "Central African Republic",
    },
    { code: "+235", country: "TD", flag: "🇹🇩", name: "Chad" },
    { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
    { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
    { code: "+61", country: "CX", flag: "🇨🇽", name: "Christmas Island" },
    { code: "+61", country: "CC", flag: "🇨🇨", name: "Cocos Islands" },
    { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
    { code: "+269", country: "KM", flag: "🇰🇲", name: "Comoros" },
    { code: "+242", country: "CG", flag: "🇨🇬", name: "Congo" },
    {
      code: "+243",
      country: "CD",
      flag: "🇨🇩",
      name: "Congo, Democratic Republic",
    },
    { code: "+682", country: "CK", flag: "🇨🇰", name: "Cook Islands" },
    { code: "+506", country: "CR", flag: "🇨🇷", name: "Costa Rica" },
    { code: "+225", country: "CI", flag: "🇨🇮", name: "Côte d'Ivoire" },
    { code: "+385", country: "HR", flag: "🇭🇷", name: "Croatia" },
    { code: "+53", country: "CU", flag: "🇨🇺", name: "Cuba" },
    { code: "+357", country: "CY", flag: "🇨🇾", name: "Cyprus" },
    { code: "+420", country: "CZ", flag: "🇨🇿", name: "Czech Republic" },
    { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark" },
    { code: "+253", country: "DJ", flag: "🇩🇯", name: "Djibouti" },
    { code: "+1767", country: "DM", flag: "🇩🇲", name: "Dominica" },
    { code: "+1809", country: "DO", flag: "🇩🇴", name: "Dominican Republic" },
    { code: "+593", country: "EC", flag: "🇪🇨", name: "Ecuador" },
    { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
    { code: "+503", country: "SV", flag: "🇸🇻", name: "El Salvador" },
    { code: "+240", country: "GQ", flag: "🇬🇶", name: "Equatorial Guinea" },
    { code: "+291", country: "ER", flag: "🇪🇷", name: "Eritrea" },
    { code: "+372", country: "EE", flag: "🇪🇪", name: "Estonia" },
    { code: "+251", country: "ET", flag: "🇪🇹", name: "Ethiopia" },
    { code: "+500", country: "FK", flag: "🇫🇰", name: "Falkland Islands" },
    { code: "+298", country: "FO", flag: "🇫🇴", name: "Faroe Islands" },
    { code: "+679", country: "FJ", flag: "🇫🇯", name: "Fiji" },
    { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland" },
    { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
    { code: "+594", country: "GF", flag: "🇬🇫", name: "French Guiana" },
    { code: "+689", country: "PF", flag: "🇵🇫", name: "French Polynesia" },
    { code: "+241", country: "GA", flag: "🇬🇦", name: "Gabon" },
    { code: "+220", country: "GM", flag: "🇬🇲", name: "Gambia" },
    { code: "+995", country: "GE", flag: "🇬🇪", name: "Georgia" },
    { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
    { code: "+233", country: "GH", flag: "🇬🇭", name: "Ghana" },
    { code: "+350", country: "GI", flag: "🇬🇮", name: "Gibraltar" },
    { code: "+30", country: "GR", flag: "🇬🇷", name: "Greece" },
    { code: "+299", country: "GL", flag: "🇬🇱", name: "Greenland" },
    { code: "+1473", country: "GD", flag: "🇬🇩", name: "Grenada" },
    { code: "+590", country: "GP", flag: "🇬🇵", name: "Guadeloupe" },
    { code: "+1671", country: "GU", flag: "🇬🇺", name: "Guam" },
    { code: "+502", country: "GT", flag: "🇬🇹", name: "Guatemala" },
    { code: "+224", country: "GN", flag: "🇬🇳", name: "Guinea" },
    { code: "+245", country: "GW", flag: "🇬🇼", name: "Guinea-Bissau" },
    { code: "+592", country: "GY", flag: "🇬🇾", name: "Guyana" },
    { code: "+509", country: "HT", flag: "🇭🇹", name: "Haiti" },
    { code: "+504", country: "HN", flag: "🇭🇳", name: "Honduras" },
    { code: "+852", country: "HK", flag: "🇭🇰", name: "Hong Kong" },
    { code: "+36", country: "HU", flag: "🇭🇺", name: "Hungary" },
    { code: "+354", country: "IS", flag: "🇮🇸", name: "Iceland" },
    { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
    { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
    { code: "+98", country: "IR", flag: "🇮🇷", name: "Iran" },
    { code: "+964", country: "IQ", flag: "🇮🇶", name: "Iraq" },
    { code: "+353", country: "IE", flag: "🇮🇪", name: "Ireland" },
    { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel" },
    { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
    { code: "+1876", country: "JM", flag: "🇯🇲", name: "Jamaica" },
    { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
    { code: "+962", country: "JO", flag: "🇯🇴", name: "Jordan" },
    { code: "+7", country: "KZ", flag: "🇰🇿", name: "Kazakhstan" },
    { code: "+254", country: "KE", flag: "🇰🇪", name: "Kenya" },
    { code: "+686", country: "KI", flag: "🇰🇮", name: "Kiribati" },
    { code: "+850", country: "KP", flag: "🇰🇵", name: "North Korea" },
    { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
    { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait" },
    { code: "+996", country: "KG", flag: "🇰🇬", name: "Kyrgyzstan" },
    { code: "+856", country: "LA", flag: "🇱🇦", name: "Laos" },
    { code: "+371", country: "LV", flag: "🇱🇻", name: "Latvia" },
    { code: "+961", country: "LB", flag: "🇱🇧", name: "Lebanon" },
    { code: "+266", country: "LS", flag: "🇱🇸", name: "Lesotho" },
    { code: "+231", country: "LR", flag: "🇱🇷", name: "Liberia" },
    { code: "+218", country: "LY", flag: "🇱🇾", name: "Libya" },
    { code: "+423", country: "LI", flag: "🇱🇮", name: "Liechtenstein" },
    { code: "+370", country: "LT", flag: "🇱🇹", name: "Lithuania" },
    { code: "+352", country: "LU", flag: "🇱🇺", name: "Luxembourg" },
    { code: "+853", country: "MO", flag: "🇲🇴", name: "Macau" },
    { code: "+389", country: "MK", flag: "🇲🇰", name: "North Macedonia" },
    { code: "+261", country: "MG", flag: "🇲🇬", name: "Madagascar" },
    { code: "+265", country: "MW", flag: "🇲🇼", name: "Malawi" },
    { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
    { code: "+960", country: "MV", flag: "🇲🇻", name: "Maldives" },
    { code: "+223", country: "ML", flag: "🇲🇱", name: "Mali" },
    { code: "+356", country: "MT", flag: "🇲🇹", name: "Malta" },
    { code: "+692", country: "MH", flag: "🇲🇭", name: "Marshall Islands" },
    { code: "+596", country: "MQ", flag: "🇲🇶", name: "Martinique" },
    { code: "+222", country: "MR", flag: "🇲🇷", name: "Mauritania" },
    { code: "+230", country: "MU", flag: "🇲🇺", name: "Mauritius" },
    { code: "+262", country: "YT", flag: "🇾🇹", name: "Mayotte" },
    { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
    { code: "+691", country: "FM", flag: "🇫🇲", name: "Micronesia" },
    { code: "+373", country: "MD", flag: "🇲🇩", name: "Moldova" },
    { code: "+377", country: "MC", flag: "🇲🇨", name: "Monaco" },
    { code: "+976", country: "MN", flag: "🇲🇳", name: "Mongolia" },
    { code: "+1664", country: "MS", flag: "🇲🇸", name: "Montserrat" },
    { code: "+212", country: "MA", flag: "🇲🇦", name: "Morocco" },
    { code: "+258", country: "MZ", flag: "🇲🇿", name: "Mozambique" },
    { code: "+95", country: "MM", flag: "🇲🇲", name: "Myanmar" },
    { code: "+264", country: "NA", flag: "🇳🇦", name: "Namibia" },
    { code: "+674", country: "NR", flag: "🇳🇷", name: "Nauru" },
    { code: "+977", country: "NP", flag: "🇳🇵", name: "Nepal" },
    { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
    { code: "+687", country: "NC", flag: "🇳🇨", name: "New Caledonia" },
    { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
    { code: "+505", country: "NI", flag: "🇳🇮", name: "Nicaragua" },
    { code: "+227", country: "NE", flag: "🇳🇪", name: "Niger" },
    { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
    { code: "+683", country: "NU", flag: "🇳🇺", name: "Niue" },
    { code: "+672", country: "NF", flag: "🇳🇫", name: "Norfolk Island" },
    {
      code: "+1670",
      country: "MP",
      flag: "🇲🇵",
      name: "Northern Mariana Islands",
    },
    { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway" },
    { code: "+968", country: "OM", flag: "🇴🇲", name: "Oman" },
    { code: "+92", country: "PK", flag: "🇵🇰", name: "Pakistan" },
    { code: "+680", country: "PW", flag: "🇵🇼", name: "Palau" },
    { code: "+970", country: "PS", flag: "🇵🇸", name: "Palestine" },
    { code: "+507", country: "PA", flag: "🇵🇦", name: "Panama" },
    { code: "+675", country: "PG", flag: "🇵🇬", name: "Papua New Guinea" },
    { code: "+595", country: "PY", flag: "🇵🇾", name: "Paraguay" },
    { code: "+51", country: "PE", flag: "🇵🇪", name: "Peru" },
    { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
    { code: "+64", country: "PN", flag: "🇵🇳", name: "Pitcairn Islands" },
    { code: "+48", country: "PL", flag: "🇵🇱", name: "Poland" },
    { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
    { code: "+1787", country: "PR", flag: "🇵🇷", name: "Puerto Rico" },
    { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar" },
    { code: "+262", country: "RE", flag: "🇷🇪", name: "Réunion" },
    { code: "+40", country: "RO", flag: "🇷🇴", name: "Romania" },
    { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
    { code: "+250", country: "RW", flag: "🇷🇼", name: "Rwanda" },
    { code: "+290", country: "SH", flag: "🇸🇭", name: "Saint Helena" },
    { code: "+1869", country: "KN", flag: "🇰🇳", name: "Saint Kitts and Nevis" },
    { code: "+1758", country: "LC", flag: "🇱🇨", name: "Saint Lucia" },
    {
      code: "+508",
      country: "PM",
      flag: "🇵🇲",
      name: "Saint Pierre and Miquelon",
    },
    {
      code: "+1784",
      country: "VC",
      flag: "🇻🇨",
      name: "Saint Vincent and the Grenadines",
    },
    { code: "+685", country: "WS", flag: "🇼🇸", name: "Samoa" },
    { code: "+378", country: "SM", flag: "🇸🇲", name: "San Marino" },
    { code: "+239", country: "ST", flag: "🇸🇹", name: "São Tomé and Príncipe" },
    { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
    { code: "+221", country: "SN", flag: "🇸🇳", name: "Senegal" },
    { code: "+381", country: "RS", flag: "🇷🇸", name: "Serbia" },
    { code: "+248", country: "SC", flag: "🇸🇨", name: "Seychelles" },
    { code: "+232", country: "SL", flag: "🇸🇱", name: "Sierra Leone" },
    { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
    { code: "+421", country: "SK", flag: "🇸🇰", name: "Slovakia" },
    { code: "+386", country: "SI", flag: "🇸🇮", name: "Slovenia" },
    { code: "+677", country: "SB", flag: "🇸🇧", name: "Solomon Islands" },
    { code: "+252", country: "SO", flag: "🇸🇴", name: "Somalia" },
    { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
    {
      code: "+500",
      country: "GS",
      flag: "🇬🇸",
      name: "South Georgia and the South Sandwich Islands",
    },
    { code: "+211", country: "SS", flag: "🇸🇸", name: "South Sudan" },
    { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
    { code: "+94", country: "LK", flag: "🇱🇰", name: "Sri Lanka" },
    { code: "+249", country: "SD", flag: "🇸🇩", name: "Sudan" },
    { code: "+597", country: "SR", flag: "🇸🇷", name: "Suriname" },
    { code: "+47", country: "SJ", flag: "🇸🇯", name: "Svalbard and Jan Mayen" },
    { code: "+268", country: "SZ", flag: "🇸🇿", name: "Eswatini" },
    { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
    { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
    { code: "+963", country: "SY", flag: "🇸🇾", name: "Syria" },
    { code: "+886", country: "TW", flag: "🇹🇼", name: "Taiwan" },
    { code: "+992", country: "TJ", flag: "🇹🇯", name: "Tajikistan" },
    { code: "+255", country: "TZ", flag: "🇹🇿", name: "Tanzania" },
    { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
    { code: "+670", country: "TL", flag: "🇹🇱", name: "Timor-Leste" },
    { code: "+228", country: "TG", flag: "🇹🇬", name: "Togo" },
    { code: "+690", country: "TK", flag: "🇹🇰", name: "Tokelau" },
    { code: "+676", country: "TO", flag: "🇹🇴", name: "Tonga" },
    { code: "+1868", country: "TT", flag: "🇹🇹", name: "Trinidad and Tobago" },
    { code: "+216", country: "TN", flag: "🇹🇳", name: "Tunisia" },
    { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
    { code: "+993", country: "TM", flag: "🇹🇲", name: "Turkmenistan" },
    {
      code: "+1649",
      country: "TC",
      flag: "🇹🇨",
      name: "Turks and Caicos Islands",
    },
    { code: "+688", country: "TV", flag: "🇹🇻", name: "Tuvalu" },
    { code: "+256", country: "UG", flag: "🇺🇬", name: "Uganda" },
    { code: "+380", country: "UA", flag: "🇺🇦", name: "Ukraine" },
    { code: "+971", country: "AE", flag: "🇦🇪", name: "United Arab Emirates" },
    { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
    { code: "+598", country: "UY", flag: "🇺🇾", name: "Uruguay" },
    { code: "+998", country: "UZ", flag: "🇺🇿", name: "Uzbekistan" },
    { code: "+678", country: "VU", flag: "🇻🇺", name: "Vanuatu" },
    { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
    { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
    {
      code: "+1284",
      country: "VG",
      flag: "🇻🇬",
      name: "British Virgin Islands",
    },
    { code: "+1340", country: "VI", flag: "🇻🇮", name: "U.S. Virgin Islands" },
    { code: "+681", country: "WF", flag: "🇼🇫", name: "Wallis and Futuna" },
    { code: "+212", country: "EH", flag: "🇪🇭", name: "Western Sahara" },
    { code: "+967", country: "YE", flag: "🇾🇪", name: "Yemen" },
    { code: "+260", country: "ZM", flag: "🇿🇲", name: "Zambia" },
    { code: "+263", country: "ZW", flag: "🇿🇼", name: "Zimbabwe" },
  ];

  // Filter countries based on search term
  const filteredCountries = countryCodes.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) ||
      country.code.includes(countrySearchTerm) ||
      country.country.toLowerCase().includes(countrySearchTerm.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Add country code to phone number
    const phoneNumber = formData.get("phone") as string;
    const fullPhoneNumber = `${selectedCountryCode} ${phoneNumber}`;
    formData.set("phone", fullPhoneNumber);

    try {
      // Submit to Formspree using fetch API
      const response = await fetch("https://formspree.io/f/xwpqajpp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Show success state
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          form.reset();
        }, 3000);
      } else {
        // Handle error case
        console.error("Form submission failed");
        alert(
          "There was an error submitting your reservation. Please try again."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "There was a network error. Please check your connection and try again."
      );
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
        setCountrySearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="reservations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-primary-gold mb-4">
            {t("reservations.title")}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("reservations.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="shadow-xl border-0 h-full">
              <CardHeader className="bg-primary-gold text-white rounded-t-lg">
                <CardTitle className="text-2xl font-semibold">
                  {t("reservations.form.title")}
                </CardTitle>
                <p className="opacity-90 p-[0px] pt-[0px] pr-[0px] pb-[10px] pl-[0px]">
                  {t("reservations.form.subtitle")}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {t("reservations.form.name")}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder={t("reservations.form.placeholder.name")}
                          required
                          className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {t("reservations.form.phone")}
                        </Label>
                        <div className="flex">
                          <div
                            className="relative flex-shrink-0"
                            ref={dropdownRef}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setIsCountryDropdownOpen(!isCountryDropdownOpen)
                              }
                              className="px-2 border border-gray-300 rounded-l-md bg-white text-left text-sm focus:outline-none focus:ring-1 focus:ring-primary-gold focus:border-primary-gold flex items-center space-x-1 min-w-[90px] h-9"
                            >
                              <span>
                                {
                                  countryCodes.find(
                                    (c) => c.code === selectedCountryCode
                                  )?.flag
                                }
                              </span>
                              <span>
                                {
                                  countryCodes.find(
                                    (c) => c.code === selectedCountryCode
                                  )?.code
                                }
                              </span>
                              <ChevronDown className="h-4 w-4 text-gray-400 ml-auto" />
                            </button>

                            {isCountryDropdownOpen && (
                              <div className="absolute z-50 mt-1 w-80 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                                <div className="p-2 border-b border-gray-200">
                                  <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                      type="text"
                                      placeholder="Search countries..."
                                      value={countrySearchTerm}
                                      onChange={(e) =>
                                        setCountrySearchTerm(e.target.value)
                                      }
                                      className="pl-10 border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                                    />
                                  </div>
                                </div>
                                <div className="py-1">
                                  {filteredCountries.map((country) => (
                                    <button
                                      key={`${country.code}-${country.country}`}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCountryCode(country.code);
                                        setIsCountryDropdownOpen(false);
                                        setCountrySearchTerm("");
                                      }}
                                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none flex items-center space-x-3"
                                    >
                                      <span className="text-lg">
                                        {country.flag}
                                      </span>
                                      <span className="font-medium">
                                        {country.code}
                                      </span>
                                      <span className="text-gray-600">
                                        {country.name}
                                      </span>
                                    </button>
                                  ))}
                                  {filteredCountries.length === 0 && (
                                    <div className="px-3 py-2 text-sm text-gray-500">
                                      No countries found
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone number"
                            required
                            className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold rounded-l-none border-l-0 flex-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {t("reservations.form.email")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("reservations.form.placeholder.email")}
                        required
                        className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">
                          {t("reservations.form.date")}
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">
                          {t("reservations.form.time")}
                        </Label>
                        <select
                          name="time"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary-gold focus:ring-primary-gold"
                        >
                          <option value="">
                            {t("reservations.form.placeholder.time")}
                          </option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">
                          {t("reservations.form.guests")}
                        </Label>
                        <select
                          name="guests"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary-gold focus:ring-primary-gold"
                        >
                          <option value="">
                            {t("reservations.form.placeholder.guests")}
                          </option>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(
                            (num) => (
                              <option key={num} value={num.toString()}>
                                {num}{" "}
                                {num === 1
                                  ? t("reservations.form.guest.singular")
                                  : t("reservations.form.guest.plural")}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t("reservations.form.requests")}
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder={t(
                          "reservations.form.placeholder.requests"
                        )}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-primary-gold focus:ring-primary-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary-gold hover:bg-yellow-600 text-white py-3 text-lg font-medium"
                      size="lg"
                      aria-label={`${t(
                        "reservations.form.submit"
                      )} reservation form`}
                    >
                      {t("reservations.form.submit")}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      {t("reservations.form.confirmation")}
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Reservation Submitted Successfully!
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p className="text-lg">
                        Thank you for your reservation request. We have received
                        your booking details.
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="font-semibold text-yellow-800 mb-2">
                          ⏰ Confirmation Timeline
                        </p>
                        <p className="text-yellow-700">
                          We will confirm your reservation within{" "}
                          <strong>24 hours</strong> via email or phone call.
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        If you don't hear from us within 24 hours, please
                        contact us directly.
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 bg-primary-gold hover:bg-yellow-600 text-white"
                    >
                      Make Another Reservation
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            {/* Operating Hours */}
            <Card className="shadow-xl border-0 h-full">
              <CardHeader className="bg-gray-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 pt-[0px] pr-[0px] pb-[10px] pl-[0px]">
                  <Clock className="w-6 h-6" />
                  <span>{t("reservations.hours.title")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-800">
                        {schedule.day}
                      </span>
                      <span
                        className={`font-semibold ${
                          schedule.isOpen ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-gold/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> {t("reservations.hours.note")}
                  </p>
                </div>
                <div className="mt-4">
                  <OpeningStatus />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
